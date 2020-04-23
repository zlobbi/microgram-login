package km.hw60.insta.service;

import km.hw60.insta.model.User;
import km.hw60.insta.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;


@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUser() {
        Random r = new Random();
        List<User> us = new ArrayList<>();
        userRepository.findAll().forEach(u -> us.add(u));
        return us.get(r.nextInt(us.size()));
    }

    public Object getUserById(String commentator) {
        return userRepository.findById(commentator);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User getByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    public User getAuthUser() {
        // get current authenticated user
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return userRepository.findByLogin(auth.getName());
    }
}

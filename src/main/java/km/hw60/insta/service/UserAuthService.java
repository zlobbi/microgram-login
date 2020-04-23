package km.hw60.insta.service;


import km.hw60.insta.model.User;
import km.hw60.insta.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;



@Service
@AllArgsConstructor
public class UserAuthService implements UserDetailsService {

    @Autowired
    private UserRepository repo;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = repo.findByLogin(s);
        if (user != null)
            return user;

        throw new UsernameNotFoundException("User does not exit");
    }


}

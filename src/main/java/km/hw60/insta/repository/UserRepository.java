package km.hw60.insta.repository;

import km.hw60.insta.controller.MainController;
import km.hw60.insta.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
    User findByLogin(String s);

}

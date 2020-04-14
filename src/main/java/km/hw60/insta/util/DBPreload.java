//package km.hw60.insta.util;
//
//import km.hw60.insta.model.Post;
//import km.hw60.insta.model.User;
//import km.hw60.insta.repository.CommentRepository;
//import km.hw60.insta.repository.PostRepository;
//import km.hw60.insta.repository.UserRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Random;
//import java.util.UUID;
//import java.util.stream.Stream;
//
//import static java.util.stream.Collectors.toList;
//
//@Configuration
//public class DBPreload {
//    private Random r = new Random();
//
//    @Bean
//    CommandLineRunner generateGibberish(UserRepository usersRepo, PostRepository postRepo, CommentRepository commentRepository) {
//        return args -> {
////            usersRepo.deleteAll();
//            commentRepository.deleteAll();
//            postRepo.deleteAll();
//
//
//            var users = Stream.generate(User::make).limit(3).collect(toList());
//            int i = 0;
////            List<Post> posts = new ArrayList<>();
////            while (i < 5) {
////                var u = users.get(r.nextInt(users.size()));
////                var p = Post.make(u);
////                posts.add(p);
////                users.add(u);
////                i++;
////            }
//
////            posts.add(post);
////            usersRepo.saveAll(users);
////            postRepo.saveAll(posts);
//
//        };
//    }
//}

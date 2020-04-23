package km.hw60.insta.controller;

import km.hw60.insta.DTO.PostDTO;
import km.hw60.insta.model.Comment;
import km.hw60.insta.model.User;
import km.hw60.insta.service.CommentService;
import km.hw60.insta.service.PostService;
import km.hw60.insta.service.UserService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
public class RController {
    private final PostService postService;
    private final UserService userService;
    private final CommentService commentService;

    public RController(PostService postService, UserService userService, CommentService commentService) {
        this.postService = postService;
        this.userService = userService;
        this.commentService = commentService;
    }

    @GetMapping("/getUser")
    public User getUser() {
        return userService.getUser() ;
    }

    @RequestMapping(value = "/auth", headers = "Accept=application/json")
    public Object checkAuthUser(@RequestBody Map<String, String> user) {
        user.forEach((k, v) -> System.out.println(k + " " + v));
        if(user.get("username").equals(userService.getAuthUser().getLogin()))
        return userService.getAuthUser();
        else return new UsernameNotFoundException("User does not exists!");
    }

    @GetMapping("/posts")
    public List<PostDTO> getPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/comments")
    public List<Comment> getComments() { return commentService.getAllComments(); }

    @PostMapping(value = "/registration", headers = "Accept=application/json")
    public User registration(@RequestBody User user) {
        user.setId(UUID.randomUUID().toString());
        userService.saveUser(user);
        System.out.println(user);
        System.out.println("base");
        System.out.println(userService.getUser());
        return user;
    }

//    @PostMapping(value = "/login")
//    public String login(@RequestParam("login") String login, @RequestParam("password") String password) {
//        User user = userService.getByLogin(login);
//        userService.saveUser(user);
//        return "success";
//    }


}

package km.hw60.insta.controller;

import km.hw60.insta.DTO.PostDTO;
import km.hw60.insta.model.Comment;
import km.hw60.insta.model.User;
import km.hw60.insta.service.CommentService;
import km.hw60.insta.service.PostService;
import km.hw60.insta.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/posts")
    public List<PostDTO> getPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/comments")
    public List<Comment> getComments() { return commentService.getAllComments(); }


}

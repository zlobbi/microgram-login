package km.hw60.insta.controller;

import km.hw60.insta.model.Comment;
import km.hw60.insta.model.Post;
import km.hw60.insta.model.User;
import km.hw60.insta.service.CommentService;
import km.hw60.insta.service.PostService;
import km.hw60.insta.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Controller
public class MainController {
    private final UserService userService;
    private final PostService postService;
    private final CommentService commentService;

    public MainController(UserService userService, PostService postService, CommentService commentService) {
        this.userService = userService;
        this.postService = postService;
        this.commentService = commentService;
    }



    @GetMapping("/registration")
    public String reg() { return "registration"; }

    @PostMapping("/addPost")
    public String get(@RequestParam("image") MultipartFile img,
                      @RequestParam("description") String des,
                      @RequestParam("userId")  String userId) throws IOException {
        File imgFile = new File("src/main/resources/static/images/" + img.getOriginalFilename());
        File imgTarget = new File("target/classes/static/images/" + img.getOriginalFilename());
        FileOutputStream o = new FileOutputStream(imgFile);
        FileOutputStream o2 = new FileOutputStream(imgTarget);
        o.write(img.getBytes());
        o2.write(img.getBytes());
        o2.close();
        o.close();
        Post post = new Post(userService.getUser(), img.getOriginalFilename(), des);
        postService.savePost(post);
        return "success";
    }

//    @GetMapping("/images/{img}")
//    public String getImage(@PathVariable("img") String img) {
//        return "src/main/resources/static/images/" + img;
//    }

    @PostMapping("/addComment")
    public String addComment(@RequestParam("userId") String userId,
                             @RequestParam("postId") String postId,
                             @RequestParam("comment") String comment,
                             @RequestParam("userEmail") String userEmail) {
        Comment c = new Comment(userId, postId, comment, userEmail);
        commentService.saveComment(c);
        return "success";
    }
}

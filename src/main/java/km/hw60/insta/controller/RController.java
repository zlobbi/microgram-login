package km.hw60.insta.controller;

import km.hw60.insta.model.User;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class RController {

    @GetMapping("/demo/getUser")
    public User getUser(Model m) {
        User u = new User("tv", "email", "pass");
        return u ;
    }

    @PostMapping("/addPost")
    public String add(@RequestParam("image") String im, @RequestParam("description") String des) {
        System.out.println(im);
        System.out.println(des);
        return "redirect:/index";
    }


}

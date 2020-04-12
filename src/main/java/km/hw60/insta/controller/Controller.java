package km.hw60.insta.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

public class Controller {
    @GetMapping
    public String root() {
        return "index";
    }

    @PostMapping("/addPost")
    @ResponseStatus(HttpStatus.SEE_OTHER)
    public String add(@RequestParam("image") String im, @RequestParam("description") String des) {
        System.out.println(im);
        System.out.println(des);
        return "redirect:/demo";
    }

    @GetMapping("/demo")
    public String demo() {
        return "demo";
    }
}

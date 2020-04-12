package km.hw60.insta.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/demo")
    public String get(Model model) {
        return "demo";
    }
}

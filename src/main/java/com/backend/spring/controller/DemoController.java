package com.backend.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DemoController {

    @GetMapping("/")
    public String showHome() {
        return "home";
    }

    // add a request mapping for /leaders

    @GetMapping("/leaders")
    public String showLeaders() {
        return "leaders";
    }

    // add request mapping for /systems

    @GetMapping("/systems")
    public String showSystems() {
        return "systems";
    }

    @GetMapping("/error")
    public String showError() {
        return "error"; // Return view name for error page
    }

}










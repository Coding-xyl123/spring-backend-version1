package com.backend.spring.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    /**
     * Shows the login page.
     * @return the name of the view for the login page.
     */
    @GetMapping("/showMyLoginPage")
    public String showMyLoginPage() {
        logger.info("Displaying login page.");
        return "fancy-login"; // The view name for the login page
    }

    /**
     * Shows the access denied page.
     * @return the name of the view for the access denied page.
     */
    @GetMapping("/access-denied")
    public String showAccessDenied() {
        logger.warn("Access denied page was accessed.");
        return "access-denied"; // The view name for the access denied page
    }
}












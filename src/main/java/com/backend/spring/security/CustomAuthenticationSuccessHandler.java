package com.backend.spring.security;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.backend.spring.entity.User;
import com.backend.spring.service.UserService;

@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private static final Logger logger = LoggerFactory.getLogger(CustomAuthenticationSuccessHandler.class);

    private final UserService userService; // Made final for immutability

    public CustomAuthenticationSuccessHandler(UserService userService) {
        this.userService = userService;
    }

    /**
     * Handles successful authentication by placing the user in the session and redirecting to the home page.
     *
     * @param request the HttpServletRequest
     * @param response the HttpServletResponse
     * @param authentication the Authentication object
     * @throws IOException if an input or output error is detected
     * @throws ServletException if the request for the GET could not be handled
     */
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {

        logger.info("In CustomAuthenticationSuccessHandler");

        String userName = authentication.getName();
        logger.info("Username: {}", userName);

        User theUser = userService.findByUserName(userName);

        if (theUser != null) {
            // Place user in the session
            HttpSession session = request.getSession();
            session.setAttribute("user", theUser);
            logger.info("User {} added to session", userName);
        } else {
            logger.warn("User {} not found in the database", userName);
            // Optionally handle this case (redirect to an error page or login page)
        }

        // Forward to home page
        response.sendRedirect(request.getContextPath() + "/");
    }
}

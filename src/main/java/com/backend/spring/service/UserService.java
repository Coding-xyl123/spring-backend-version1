package com.backend.spring.service;

import com.backend.spring.entity.User;
import com.backend.spring.user.WebUser;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

	public User findByUserName(String userName);

	void save(WebUser webUser);

}

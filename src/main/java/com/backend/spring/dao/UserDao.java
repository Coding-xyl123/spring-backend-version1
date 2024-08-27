package com.backend.spring.dao;

import com.backend.spring.entity.User;

public interface UserDao {

    User findByUserName(String userName);

    void save(User theUser);
}

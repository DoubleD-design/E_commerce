package com.example.service;

import com.example.Exception.UserException;
import com.example.model.User;

public interface UserService {
    public User findUserById(Long userId) throws UserException;

    public User findUserProfilebyJwt(String jwt) throws UserException;
}

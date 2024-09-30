package com.example.service;

import com.example.exception.UserException;
import com.example.modal.User;

import java.util.List;

public interface UserService {

    User findUserById(Long userId) throws UserException;

    User findUserProfileByJwt(String jwt) throws UserException;

    List<User> findAllUsers();

}

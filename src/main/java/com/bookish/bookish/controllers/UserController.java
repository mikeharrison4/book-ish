package com.bookish.bookish.controllers;

import com.bookish.bookish.models.User;
import com.bookish.bookish.models.UserOrder;
import com.bookish.bookish.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "{userId}/orders")
    public List<UserOrder> getAllOrdersForUser(@PathVariable("userId") String userId) {
        return userService.getAllOrdersForUser(userId);
    }

}

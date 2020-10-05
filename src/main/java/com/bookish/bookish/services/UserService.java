package com.bookish.bookish.services;

import com.bookish.bookish.dao.UserDataAccessService;
import com.bookish.bookish.models.User;
import com.bookish.bookish.models.UserOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserDataAccessService userDataAccessService;

    @Autowired
    public UserService(UserDataAccessService userDataAccessService) {
        this.userDataAccessService = userDataAccessService;
    }

    public List<User> getAllUsers() {
        return userDataAccessService.selectAllUsers();
    }

    public List<UserOrder> getAllOrdersForUser(String userId) {
        return userDataAccessService.selectAllUserOrders(userId);
    }
}

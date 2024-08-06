package com.mobilerecharge.recharge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.mobilerecharge.recharge.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.mobilerecharge.recharge.model.UserModel;


@RestController
public class UserController {
    @Autowired
    UserService service;

    @GetMapping("/users")
    public List<UserModel> getUsers() {
        return service.getUsers();
    }

    @PostMapping("/addAdminUser")
    public boolean addAdminUser(@RequestBody UserModel user) {
        UserModel user1 = service.addAdminUser(user);
        if(user1 != null) {
            return true;
        }
        return false;
    }

    @PostMapping("/addUser")
    public boolean addUser(@RequestBody UserModel user) {
        UserModel user1 = service.addUser(user);
        if(user1 != null) {
            return true;
        }
        return false;
    }

    @PostMapping("/login")
    public UserModel login(@RequestBody UserModel user) {
        UserModel authenticated = service.login(user);
        if (authenticated!=null) {
            return authenticated;
        }
        return null;
    }

    @GetMapping("/userCount")
    public long getUserCount() {
        return service.getUserCount();
    }
}

package com.mobilerecharge.recharge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mobilerecharge.recharge.model.ContactModel;
import com.mobilerecharge.recharge.service.ContactService;

@RestController
public class ContactController {
    @Autowired
    ContactService service;

    @PostMapping("/contactus")
    public String contact(@RequestBody ContactModel con){
        return service.contact(con);
    }

    @GetMapping("/contactCount")
    public long getContactCount(){
        return service.getContactCount();
    }
    @GetMapping("/getAllContacts")
    public List<ContactModel> getAllContacts(){
        return service.getAllContacts();
    }
}

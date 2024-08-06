package com.mobilerecharge.recharge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mobilerecharge.recharge.model.ContactModel;
import com.mobilerecharge.recharge.repository.ContactRepository;

@Service
public class ContactService {
    @Autowired
    ContactRepository repo;

    public String contact(ContactModel con){
        repo.save(con);
        return "Request Received";
    }

    public long getContactCount(){
        return repo.count();
    }

    public List<ContactModel> getAllContacts(){
        return repo.findAll();
    }
}

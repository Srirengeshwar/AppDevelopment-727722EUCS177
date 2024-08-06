package com.mobilerecharge.recharge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mobilerecharge.recharge.model.ContactModel;

@Repository
public interface ContactRepository extends JpaRepository<ContactModel,Integer> {
    
}

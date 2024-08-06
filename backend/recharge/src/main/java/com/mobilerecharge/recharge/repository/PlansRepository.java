package com.mobilerecharge.recharge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobilerecharge.recharge.model.PlansModel;

public interface PlansRepository extends JpaRepository<PlansModel, Integer> {
    
}

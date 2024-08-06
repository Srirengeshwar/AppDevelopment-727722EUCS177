package com.mobilerecharge.recharge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mobilerecharge.recharge.enums.RoleEnum;
import com.mobilerecharge.recharge.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> {
    UserModel findByEmail(String email);

    long countByRole(RoleEnum role);
}

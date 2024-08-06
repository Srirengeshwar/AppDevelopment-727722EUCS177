package com.mobilerecharge.recharge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class RechargeApplication {

	public static void main(String[] args) {
		SpringApplication.run(RechargeApplication.class, args);
	}

}

package com.example.e_commerce_backend;

import org.hibernate.Version;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EnableJpaRepositories(basePackages = "com.example.repository") // Thêm annotation này
@EntityScan("com.example.model") //hoặc package mà User.java ở trong
@ComponentScan(basePackages = {"com.example.controller", "com.example.service", "com.example.config"})
public class ECommerceBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(ECommerceBackendApplication.class, args);
    }
}

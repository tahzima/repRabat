package com.example.demo.Dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Beans.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	User findByEmail(String email);
	//User findByPassword(String password);
}

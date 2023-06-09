package com.example.demo.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Beans.User;
import com.example.demo.Services.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/users")
@Api("API de gestion des utilisateurs")
public class UserWs {
	
	@Autowired
	UserService userService;
	
	@PostMapping
	@ApiOperation("Ajouter un utilisateur")
	public Boolean create(@RequestBody User user) {
		return userService.create(user);
	}

	@PutMapping("/update")
	@ApiOperation("Modifier un utilisateur")
	public Boolean update(@RequestBody User user) {
		return userService.update(user);
	}
	
	@DeleteMapping("/delete/{id}")
	@ApiOperation("Supprimer un utilisateur")
	public Boolean delete(@PathVariable Long id) {
		return userService.delete(id);
	}
	
	@GetMapping
	@ApiOperation("Recuperer la liste des utilisateurs")
	public List<User> findAll(){
		return userService.findAll();
	}
	
	@ApiOperation("Récupérer un utilisateur par email")
	@GetMapping("/find/email/{email}")
	public User findByEmail(@PathVariable String email) {
		return userService.findByEmail(email);
	}
	@ApiOperation("authentification par email et password")
	@GetMapping("/auth/{email}/{password}")
	public User auth(@PathVariable String email, @PathVariable String password) {
		return userService.auth(email, password);
	}
	
}

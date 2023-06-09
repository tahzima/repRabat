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

import com.example.demo.Beans.Commande;
import com.example.demo.Services.CommandeService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/commandes")
@Api("API de gestion des commandes")
public class CommandeWs {
	
	@Autowired
	CommandeService commandeService;
	
	@PostMapping
	@ApiOperation("Ajouter une commande")
	public Boolean create(@RequestBody Commande commande) {
		return commandeService.create(commande);
	}

	@PutMapping("/update")
	@ApiOperation("Modifier une commande")
	public Boolean update(@RequestBody Commande commande) {
		return commandeService.update(commande);
	}
	
	@DeleteMapping("/delete/{id}")
	@ApiOperation("Supprimer une commande")
	public Boolean delete(@PathVariable Long id) {
		return commandeService.delete(id);
	}
	
	@GetMapping
	@ApiOperation("Recuperer la liste des commandes")
	public List<Commande> findAll(){
		return commandeService.findAll();
	}
	
}

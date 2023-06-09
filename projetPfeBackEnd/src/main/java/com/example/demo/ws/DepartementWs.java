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

import com.example.demo.Beans.Departement;
import com.example.demo.Services.DepartementService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/departements")
@Api("API de gestion des departementd")
public class DepartementWs {

	@Autowired
	DepartementService departementService;

	@PostMapping
	@ApiOperation("Ajouter une departement")
	public Boolean create(@RequestBody Departement departement) {
		return departementService.create(departement);
	}

	@PutMapping("/update")
	@ApiOperation("Modifier une departement")
	public Boolean update(@RequestBody Departement departement) {
		return departementService.update(departement);
	}
	
	@DeleteMapping("/delete/{id}")
	@ApiOperation("Supprimer une departement")
	public Boolean delete(@PathVariable Long id) {
		return departementService.delete(id);
	}
	
	@GetMapping
	@ApiOperation("Recuperer la liste des commandes")
	public List<Departement> findAll(){
		return departementService.findAll();
	}
}

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

import com.example.demo.Beans.Reclamation;
import com.example.demo.Services.ReclamationService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/reclamation")
@Api("API de gestion des reclamations")
public class ReclamationWs {

	@Autowired
	ReclamationService reclamationService;

	@PostMapping
	@ApiOperation("Ajouter une reclamation")
	public Boolean create(@RequestBody Reclamation reclamation) {
		return reclamationService.create(reclamation);
	}

	@PutMapping("/update")
	@ApiOperation("Modifier une reclamation")
	public Boolean update(@RequestBody Reclamation reclamation) {
		return reclamationService.update(reclamation);
	}

	@DeleteMapping("/delete/{id}")
	@ApiOperation("Supprimer une reclamtion")
	public Boolean delete(@PathVariable Long id) {
		return reclamationService.delete(id);
	}

	@GetMapping(produces="application/json")
	@ApiOperation("Recuperer la liste des reclamations")
	public List<Reclamation> findAll() {
		System.out.println(reclamationService.findAll());
		return reclamationService.findAll();
	}

}


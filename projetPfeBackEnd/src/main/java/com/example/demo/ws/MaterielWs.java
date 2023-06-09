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

import com.example.demo.Beans.Materiel;
import com.example.demo.Services.MaterielService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/materiels")
@Api("API de gestion des materieux")
public class MaterielWs {
	
	@Autowired
	MaterielService materielService;
	
	@PostMapping
	@ApiOperation("Ajouter un materiel")
	public Boolean create(@RequestBody Materiel materiel) {
		return materielService.create(materiel);
	}

	@PutMapping("/update")
	@ApiOperation("Modifier un materiel")
	public Boolean update(@RequestBody Materiel materiel) {
		return materielService.update(materiel);
	}

	@DeleteMapping("/delete/{id}")
	@ApiOperation("Supprimer un materiel")
	public Boolean delete(@PathVariable Long id) {
		return materielService.delete(id);
	}

	@GetMapping
	@ApiOperation("Recuperer la liste des materieux")
	public List<Materiel> findAll() {
		return materielService.findAll();
	}

	
}

package com.example.demo.Beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Departement {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String nomDepartement;
	
	@OneToMany(targetEntity = User.class, mappedBy = "departement")
	@JsonManagedReference
	@Column(nullable = true)
	private List<User> users;
	
	public Departement() {}

	public Departement(Long id, String nomDepartement, List<User> users) {
		super();
		this.id = id;
		this.nomDepartement = nomDepartement;
		this.users = users;
	}

	public Departement(String nomDepartement, List<User> users) {
		super();
		this.nomDepartement = nomDepartement;
		this.users = users;
	}
	
	public Departement(String nomDepartement) {
		super();
		this.nomDepartement = nomDepartement;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomDepartement() {
		return nomDepartement;
	}

	public void setNomDepartement(String nomDepartement) {
		this.nomDepartement = nomDepartement;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

}

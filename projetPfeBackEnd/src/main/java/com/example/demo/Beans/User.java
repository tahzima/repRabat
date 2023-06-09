package com.example.demo.Beans;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String nom;
	private String prenom;
	private String role;
	@Column(unique=true)
	private String email;
	private String password;
	private String address;
	private Date dateNaissance;
	private String numeroTelephone;
	
	@ManyToOne(optional = true)
	@JoinColumn(name="id_departement")
	@JsonBackReference
	private Departement departement;

	@Column(nullable = true)
	@OneToMany(targetEntity = Commande.class, mappedBy = "user")
	@JsonManagedReference
	private List<Commande> commande;

	@Column(nullable = true)
	@OneToMany(targetEntity = Reclamation.class, mappedBy = "user")
	@JsonManagedReference
	private List<Reclamation> reclamation;
	
	public User() {}

	public User(Long id, String nom, String prenom, String role, String email, String password, String address,
			Date dateNaissance, String numeroTelephone, Departement departement, List<Commande> commande,
			List<Reclamation> reclamation) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.role = role;
		this.email = email;
		this.password = password;
		this.address = address;
		this.dateNaissance = dateNaissance;
		this.numeroTelephone = numeroTelephone;
		this.departement = departement;
		this.commande = commande;
		this.reclamation = reclamation;
	}

	public User(String nom, String prenom, String role, String email, String password, String address,
			Date dateNaissance, String numeroTelephone, Departement departement, List<Commande> commande,
			List<Reclamation> reclamation) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.role = role;
		this.email = email;
		this.password = password;
		this.address = address;
		this.dateNaissance = dateNaissance;
		this.numeroTelephone = numeroTelephone;
		this.departement = departement;
		this.commande = commande;
		this.reclamation = reclamation;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getNumeroTelephone() {
		return numeroTelephone;
	}

	public void setNumeroTelephone(String numeroTelephone) {
		this.numeroTelephone = numeroTelephone;
	}

	public Departement getDepartement() {
		return departement;
	}

	public void setDepartement(Departement departement) {
		this.departement = departement;
	}

	public List<Commande> getCommande() {
		return commande;
	}

	public void setCommande(List<Commande> commande) {
		this.commande = commande;
	}

	public List<Reclamation> getReclamation() {
		return reclamation;
	}

	public void setReclamation(List<Reclamation> reclamation) {
		this.reclamation = reclamation;
	}

	

}

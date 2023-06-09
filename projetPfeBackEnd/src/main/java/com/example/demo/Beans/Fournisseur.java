package com.example.demo.Beans;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Fournisseur {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String prenom;
	private String nomSociete;
	private String ice;
	private String numeroTelephone;
	
	@ManyToMany(mappedBy = "fournisseurs")
	private List<Materiel> materieux;
	
	public Fournisseur() {}

	public Fournisseur(Long id, String nom, String prenom, String nomSociete, String ice, String numeroTelephone,
			List<Materiel> materieux) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.nomSociete = nomSociete;
		this.ice = ice;
		this.numeroTelephone = numeroTelephone;
		this.materieux = materieux;
	}

	public Fournisseur(String nom, String prenom, String nomSociete, String ice, String numeroTelephone,
			List<Materiel> materieux) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.nomSociete = nomSociete;
		this.ice = ice;
		this.numeroTelephone = numeroTelephone;
		this.materieux = materieux;
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

	public String getNomSociete() {
		return nomSociete;
	}

	public void setNomSociete(String nomSociete) {
		this.nomSociete = nomSociete;
	}

	public String getIce() {
		return ice;
	}

	public void setIce(String ice) {
		this.ice = ice;
	}

	public String getNumeroTelephone() {
		return numeroTelephone;
	}

	public void setNumeroTelephone(String numeroTelephone) {
		this.numeroTelephone = numeroTelephone;
	}

	public List<Materiel> getMaterieux() {
		return materieux;
	}

	public void setMaterieux(List<Materiel> materieux) {
		this.materieux = materieux;
	}
	
}

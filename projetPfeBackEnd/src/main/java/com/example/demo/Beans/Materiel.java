package com.example.demo.Beans;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Materiel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private float prix;
	private String marque;
	private String numeroSerie;

	@ManyToMany
	@JoinTable(name = "fournisseur_materiel", joinColumns = @JoinColumn(name = "id_materiel"), inverseJoinColumns = @JoinColumn(name = "id_fournisseur"))
	private List<Fournisseur> fournisseurs;

	@ManyToMany
	@JoinTable(name = "commande_materiel", joinColumns = @JoinColumn(name = "id_materiel"), inverseJoinColumns = @JoinColumn(name = "id_commande"))
	private List<Commande> commandes;
	
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(name = "reclamation_materiel", joinColumns = @JoinColumn(name = "id_materiel"), inverseJoinColumns = @JoinColumn(name = "id_reclamation"))
	private List<Reclamation> reclamations;

	public Materiel() {
	}

	public Materiel(Long id, String nom, float prix, String marque, String numeroSerie, List<Fournisseur> fournisseurs,
			List<Commande> commandes, List<Reclamation> reclamations) {
		super();
		this.id = id;
		this.nom = nom;
		this.prix = prix;
		this.marque = marque;
		this.numeroSerie = numeroSerie;
		this.fournisseurs = fournisseurs;
		this.commandes = commandes;
		this.reclamations = reclamations;
	}

	public Materiel(String nom, float prix, String marque, String numeroSerie, List<Fournisseur> fournisseurs,
			List<Commande> commandes, List<Reclamation> reclamations) {
		super();
		this.nom = nom;
		this.prix = prix;
		this.marque = marque;
		this.numeroSerie = numeroSerie;
		this.fournisseurs = fournisseurs;
		this.commandes = commandes;
		this.reclamations = reclamations;
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

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public String getMarque() {
		return marque;
	}

	public void setMarque(String marque) {
		this.marque = marque;
	}

	public String getNumeroSerie() {
		return numeroSerie;
	}

	public void setNumeroSerie(String numeroSerie) {
		this.numeroSerie = numeroSerie;
	}

	public List<Fournisseur> getFournisseurs() {
		return fournisseurs;
	}

	public void setFournisseurs(List<Fournisseur> fournisseurs) {
		this.fournisseurs = fournisseurs;
	}

	public List<Commande> getCommandes() {
		return commandes;
	}

	public void setCommandes(List<Commande> commandes) {
		this.commandes = commandes;
	}

	public List<Reclamation> getReclamations() {
		return reclamations;
	}

	public void setReclamations(List<Reclamation> reclamations) {
		this.reclamations = reclamations;
	}

}

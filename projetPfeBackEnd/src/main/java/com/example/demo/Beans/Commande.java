package com.example.demo.Beans;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Commande {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String numeroCommande;
	private int qte;
	private float prixTT;
	private Date dateCommande;
	
	@ManyToOne
	@JoinColumn(name="id_user")
	@JsonBackReference
	private User user;
	
	@ManyToMany(mappedBy = "commandes")
	private List<Materiel> materieux;
	
	public Commande() {}

	public Commande(Long id, String numeroCommande, int qte, float prixTT, Date dateCommande, User user,
			List<Materiel> materieux) {
		super();
		this.id = id;
		this.numeroCommande = numeroCommande;
		this.qte = qte;
		this.prixTT = prixTT;
		this.dateCommande = dateCommande;
		this.user = user;
		this.materieux = materieux;
	}

	public Commande(String numeroCommande, int qte, float prixTT, Date dateCommande, User user,
			List<Materiel> materieux) {
		super();
		this.numeroCommande = numeroCommande;
		this.qte = qte;
		this.prixTT = prixTT;
		this.dateCommande = dateCommande;
		this.user = user;
		this.materieux = materieux;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumeroCommande() {
		return numeroCommande;
	}

	public void setNumeroCommande(String numeroCommande) {
		this.numeroCommande = numeroCommande;
	}

	public int getQte() {
		return qte;
	}

	public void setQte(int qte) {
		this.qte = qte;
	}

	public float getPrixTT() {
		return prixTT;
	}

	public void setPrixTT(float prixTT) {
		this.prixTT = prixTT;
	}

	public Date getDateCommande() {
		return dateCommande;
	}

	public void setDateCommande(Date dateCommande) {
		this.dateCommande = dateCommande;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Materiel> getMaterieux() {
		return materieux;
	}

	public void setMaterieux(List<Materiel> materieux) {
		this.materieux = materieux;
	}

}

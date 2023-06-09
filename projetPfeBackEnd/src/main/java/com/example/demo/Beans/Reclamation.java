package com.example.demo.Beans;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Reclamation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String status;
	private String descriptionPanne;
	private Date dateReclamation;
	private Date dateReparation;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="id_user")
	@JsonBackReference
	private User user;
	
	@ManyToMany(fetch=FetchType.EAGER,mappedBy = "reclamations")
	private List<Materiel> materieux;
	
	public Reclamation() {}

	public Reclamation(Long id, String status, String descriptionPanne, Date dateReclamation, Date dateReparation,
			User user, List<Materiel> materieux) {
		super();
		this.id = id;
		this.status = status;
		this.descriptionPanne = descriptionPanne;
		this.dateReclamation = dateReclamation;
		this.dateReparation = dateReparation;
		this.user = user;
		this.materieux = materieux;
	}

	public Reclamation(String status, String descriptionPanne, Date dateReclamation, Date dateReparation, User user,
			List<Materiel> materieux) {
		super();
		this.status = status;
		this.descriptionPanne = descriptionPanne;
		this.dateReclamation = dateReclamation;
		this.dateReparation = dateReparation;
		this.user = user;
		this.materieux = materieux;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescriptionPanne() {
		return descriptionPanne;
	}

	public void setDescriptionPanne(String descriptionPanne) {
		this.descriptionPanne = descriptionPanne;
	}

	public Date getDateReclamation() {
		return dateReclamation;
	}

	public void setDateReclamation(Date dateReclamation) {
		this.dateReclamation = dateReclamation;
	}

	public Date getDateReparation() {
		return dateReparation;
	}

	public void setDateReparation(Date dateReparation) {
		this.dateReparation = dateReparation;
	}

	public User getUser() {
		return this.user;
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

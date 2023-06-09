package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Beans.Fournisseur;
import com.example.demo.Dao.FournisseurDao;

@Service
public class FournisseurService {

	@Autowired
	FournisseurDao fournisseurDao;
	
public Boolean create (Fournisseur fournisseur) {
		
		Boolean test=false;
		
		if(fournisseurDao.save(fournisseur)!=null) {
			test=true;
		}
		
		return test;
	}
	
	public Boolean update (Fournisseur fournisseur) {

		Boolean test=false;
		
		if(this.findById(fournisseur.getId()) != null) {	
			fournisseurDao.save(fournisseur);
			test=true;
		}
		
		return test;
	}
	
	public Boolean delete (Long id) {

		Boolean test=false;
		
		if(this.findById(id) != null) {		
			fournisseurDao.deleteById(id);
			test=true;
		}
		
		return test;
	}
	
	public Fournisseur findById(Long id) {
		return fournisseurDao.getById(id);
	}
	
	public List<Fournisseur> findAll() {
		return fournisseurDao.findAll();
	}
	
}

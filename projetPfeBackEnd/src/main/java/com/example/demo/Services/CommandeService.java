package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Beans.Commande;
import com.example.demo.Dao.CommandeDao;

@Service
public class CommandeService {

	@Autowired
	CommandeDao commandeDao;

	public Boolean create(Commande commande) {

		Boolean test = false;

		if (commandeDao.save(commande) != null) {
			test = true;
		}

		return test;
	}

	public Boolean update(Commande commande) {

		Boolean test = false;

		if (this.findById(commande.getId()) != null) {
			commandeDao.save(commande);
			test = true;
		}

		return test;
	}

	public Boolean delete(Long id) {

		Boolean test = false;

		if (this.findById(id) != null) {
			commandeDao.deleteById(id);
			test = true;
		}

		return test;
	}

	public Commande findById(Long id) {
		return commandeDao.getById(id);
	}

	public List<Commande> findAll() {
		return commandeDao.findAll();
	}

}

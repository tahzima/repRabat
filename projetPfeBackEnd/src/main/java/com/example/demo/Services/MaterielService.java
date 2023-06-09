package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Beans.Materiel;
import com.example.demo.Dao.MaterielDao;

@Service
public class MaterielService {

	@Autowired
	MaterielDao materielDao;

	public Boolean create(Materiel materiel) {

		Boolean test = false;

		if (materielDao.save(materiel) != null) {
			test = true;
		}

		return test;
	}

	public Boolean update(Materiel materiel) {

		Boolean test = false;

		if (this.findById(materiel.getId()) != null) {
			materielDao.save(materiel);
			test = true;
		}

		return test;
	}

	public Boolean delete(Long id) {

		Boolean test = false;

		if (this.findById(id) != null) {
			materielDao.deleteById(id);
			test = true;
		}

		return test;
	}

	public Materiel findById(Long id) {
		return materielDao.getById(id);
	}

	public List<Materiel> findAll() {
		return materielDao.findAll();
	}

}

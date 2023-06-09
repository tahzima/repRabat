package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Beans.Departement;
import com.example.demo.Dao.DepartementDao;

@Service
public class DepartementService {

	@Autowired
	DepartementDao departementDao;

	public Boolean create(Departement departement) {

		Boolean test = false;

		if (departementDao.save(departement) != null) {
			test = true;
		}

		return test;
	}

	public Boolean update(Departement departement) {

		Boolean test = false;

		if (this.findById(departement.getId()) != null) {
			departementDao.save(departement);
			test = true;
		}

		return test;
	}

	public Boolean delete(Long id) {

		Boolean test = false;

		if (this.findById(id) != null) {
			departementDao.deleteById(id);
			test = true;
		}

		return test;
	}

	public Departement findById(Long id) {
		return departementDao.getById(id);
	}

	public List<Departement> findAll() {
		return departementDao.findAll();
	}

}

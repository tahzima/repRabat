package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Beans.Reclamation;
import com.example.demo.Dao.ReclamationDao;

@Service
public class ReclamationService {

	@Autowired
	ReclamationDao reclamationDao;

	public Boolean create(Reclamation reclamation) {

		Boolean test = false;

		if (reclamationDao.save(reclamation) != null) {
			test = true;
		}

		return test;
	}

	public Boolean update(Reclamation reclamation) {

		Boolean test = false;

		if (this.findById(reclamation.getId()) != null) {
			reclamationDao.save(reclamation);
			test = true;
		}

		return test;
	}

	public Boolean delete(Long id) {

		Boolean test = false;

		if (this.findById(id) != null) {
			reclamationDao.deleteById(id);
			test = true;
		}

		return test;
	}

	public Reclamation findById(Long id) {
		return reclamationDao.getById(id);
	}

	public List<Reclamation> findAll() {
		List<Reclamation> test = reclamationDao.findAll();
		System.out.println(test);
		return test; 
	}

}

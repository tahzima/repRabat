package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Beans.Materiel;

@Repository
public interface MaterielDao extends JpaRepository<Materiel, Long>{

}

package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Beans.Departement;

@Repository
public interface DepartementDao extends JpaRepository<Departement, Long> {

}

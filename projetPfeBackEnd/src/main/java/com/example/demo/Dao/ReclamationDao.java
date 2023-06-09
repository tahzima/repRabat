package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Beans.Reclamation;

@Repository
public interface ReclamationDao extends JpaRepository<Reclamation, Long> {

}

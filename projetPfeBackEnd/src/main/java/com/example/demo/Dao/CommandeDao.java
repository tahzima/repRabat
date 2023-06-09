package com.example.demo.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Beans.Commande;

@Repository
public interface CommandeDao extends JpaRepository<Commande, Long> {

}

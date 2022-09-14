package com.infoway.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoway.entites.Donor;

public interface DonorDao extends JpaRepository<Donor, Integer> {
	Donor findByRemail(String remail);

}

package com.infoway.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoway.entites.Donor;

public interface DonorDao extends JpaRepository<Donor, Integer> {
	Donor findByRemail(String remail);
	Donor save(Donor d);
	Donor findByRemailAndRpassword(String remail,String rpassword);
	List<Donor> findAll();
	void deleteByRid(int id);
	Donor findByRid(int id);

}

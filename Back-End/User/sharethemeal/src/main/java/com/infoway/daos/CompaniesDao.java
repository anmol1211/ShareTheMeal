package com.infoway.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infoway.entites.Companies;
import com.infoway.entites.Donor;
import com.infoway.entites.Food;



public interface CompaniesDao extends JpaRepository<Companies, Integer>  {

	Companies findByCemail(String remail);
	Companies save(Companies d);
	Companies findByCemailAndCpass(String remail,String rpassword);
	List<Companies> findAll();
	void deleteByCid(int id);
}

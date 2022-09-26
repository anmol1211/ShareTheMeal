package com.infoway.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.infoway.entites.Customers;
import com.infoway.entites.Donor;

public interface CustomersDao extends JpaRepository<Customers, Integer>  {

	Customers findByCemail(String remail);
	Customers save(Customers d);
	Customers findByCemailAndCpassword(String remail,String rpassword);
	List<Customers> findAll();
	void deleteByCid(int id);
	Customers findByCid(int id);
}

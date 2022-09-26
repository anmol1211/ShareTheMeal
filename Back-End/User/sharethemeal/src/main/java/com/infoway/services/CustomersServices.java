package com.infoway.services;

import java.util.List;

import com.infoway.entites.Customers;

public interface CustomersServices {

	Customers findByCemail(String remail);
	Customers add(Customers d);
	Customers login(Customers d);
	List<Customers> findAll();
	void deleteByCid(int id);
	Customers findByCid(int id);
}

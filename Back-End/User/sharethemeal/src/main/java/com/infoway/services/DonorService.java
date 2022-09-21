package com.infoway.services;

import java.util.List;

import com.infoway.entites.Donor;

public interface DonorService {
	
	
	Donor findByEmail(String remail);
	 Donor save(Donor donor);
	 Donor findEamil(Donor donor);
	 List<Donor> findAll();
	 boolean deleteById(int id);
	 Donor update(Donor b);
	 Donor findByRid(int id);
}

package com.infoway.services;

import com.infoway.entites.Donor;

public interface DonorService {
	
	
	Donor findByEmail(String remail);
	Donor authenticate(String email, String password);
}

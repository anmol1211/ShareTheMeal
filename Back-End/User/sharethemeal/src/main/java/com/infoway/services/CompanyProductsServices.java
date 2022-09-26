package com.infoway.services;

import java.util.List;

import com.infoway.entites.CompanyProducts;

public interface CompanyProductsServices {

	

	//Companies findByCemail(String remail);
	CompanyProducts save(CompanyProducts d);
	//Companies findByCemailAndCpass(String remail,String rpassword);
	List<CompanyProducts> findAll();
	void deleteByFpId(int id);
}

package com.infoway.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.infoway.entites.CompanyProducts;

public interface CompanyProductsDao extends  JpaRepository<CompanyProducts, Integer>  {

	//Companies findByCemail(String remail);
	CompanyProducts save(CompanyProducts d);
	//Companies findByCemailAndCpass(String remail,String rpassword);
	List<CompanyProducts> findAll();
	void deleteByFid(int id);
}

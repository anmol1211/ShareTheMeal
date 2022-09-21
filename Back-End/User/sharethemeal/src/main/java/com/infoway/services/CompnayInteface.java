package com.infoway.services;

import java.util.List;

import com.infoway.entites.Companies;
import com.infoway.entites.Donor;

public interface CompnayInteface {

	Companies findByCemail(Companies c);
	Companies save(Companies d);
	Companies findByCemailAndCpass(Companies c);
	List<Companies> findAll();
	void deleteByCid(int id);
}

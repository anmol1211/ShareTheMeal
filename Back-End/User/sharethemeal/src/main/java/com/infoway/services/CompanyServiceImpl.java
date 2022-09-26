package com.infoway.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infoway.daos.CompaniesDao;
import com.infoway.entites.Companies;
import com.infoway.entites.Donor;

@Transactional
@Service
public class CompanyServiceImpl implements CompnayInteface {
	
	@Autowired
	private CompaniesDao cDao;

	@Override
	public Companies findByCemail(Companies c) {
		// TODO Auto-generated method stub
		return cDao.findByCemailAndCpass(c.getCemail(), c.getCpass());
	}

	@Override
	public Companies save(Companies d) {
		// TODO Auto-generated method stub
		return cDao.save(d);
	}

	@Override
	public Companies findByCemailAndCpass(Companies c) {
		// TODO Auto-generated method stub
		return cDao.findByCemailAndCpass(c.getCemail(), c.getCpass());
	}

	@Override
	public List<Companies> findAll() {
		// TODO Auto-generated method stub
		return cDao.findAll();
	}

	@Override
	public void deleteByCid(int id) {
		// TODO Auto-generated method stub
		
	}
	

	
	

}

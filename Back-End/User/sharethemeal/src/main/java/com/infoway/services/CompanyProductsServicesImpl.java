package com.infoway.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infoway.daos.CompanyProductsDao;
import com.infoway.entites.CompanyProducts;

@Transactional
@Service
public class CompanyProductsServicesImpl implements CompanyProductsServices {

	
	@Autowired
	private CompanyProductsDao cProductDao;
	@Override
	public CompanyProducts save(CompanyProducts d) {
		// TODO Auto-generated method stub
		return cProductDao.save(d);
	}

	@Override
	public List<CompanyProducts> findAll() {
		// TODO Auto-generated method stub
		return cProductDao.findAll();
	}

	@Override
	public void deleteByFpId(int id) {
		cProductDao.deleteByFid(id);
		
	}

}

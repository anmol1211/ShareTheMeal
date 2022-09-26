package com.infoway.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infoway.daos.CustomersDao;
import com.infoway.entites.Customers;

@Transactional
@Service
public class CustomersServicesImpl implements CustomersServices {

	@Autowired 
	private CustomersDao custDao;
	@Override
	public Customers findByCemail(String remail) {
		// TODO Auto-generated method stub
		return custDao.findByCemail(remail);
	}

	@Override
	public Customers add(Customers d) {
		// TODO Auto-generated method stub
		return custDao.save(d);
	}

	

	@Override
	public List<Customers> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteByCid(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Customers login(Customers d) {
		// TODO Auto-generated method stub
		return custDao.findByCemailAndCpassword(d.getCemail(), d.getCpassword());
	}

	@Override
	public Customers findByCid(int id) {
		// TODO Auto-generated method stub
		return custDao.findByCid(id);
	}

}

package com.infoway.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.infoway.daos.DonorDao;
import com.infoway.entites.Donor;


@Transactional
@Service
public class DonorServicesImpl implements DonorService {

	@Autowired
	private DonorDao donorDao;
	
//	@Autowired
//	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private DonorService donor;
	
	
//	@Override
//	public Donor findByEmail(String email) {
//		return donorDao.findByRemail(email);
//	}
	
	
	@Override
	public Donor findByEmail(String remail) {
		// TODO Auto-generated method stub
		return donorDao.findByRemail(remail);
	}
	@Override
	public Donor authenticate(String email, String password) {
		// TODO Auto-generated method stub
		Donor donor = findByEmail(email);
		if(donor != null && passwordEncoder.matches(password, donor.getRpassword()))
			return donor;
		return null;
	}

}

//@Override
//public Customer authenticate(String email, String password) {
//	Customer cust = findByEmail(email);
//	if(cust != null && passwordEncoder.matches(password, cust.getPassword()))
//		return cust;
//	return null;
//}
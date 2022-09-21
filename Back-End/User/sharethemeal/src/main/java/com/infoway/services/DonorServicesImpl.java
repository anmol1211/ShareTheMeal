package com.infoway.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

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
	
//	@Autowired
//	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private DonorService donor;
	
	

	
	
	@Override
	public Donor findByEmail(String remail) {
		// TODO Auto-generated method stub
		return donorDao.findByRemail(remail);
	}





	@Override
	public Donor save(Donor donor) {
		
		return donorDao.save(donor);
	}





	@Override
	public Donor findEamil(Donor donor) {
		// TODO Auto-generated method stub
		return donorDao.findByRemailAndRpassword(donor.getRemail(), donor.getRpassword());
	}





	@Override
	public List<Donor> findAll() {
		// TODO Auto-generated method stub
		return donorDao.findAll();
	}





	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		if(donorDao.existsById(id)) {
			donorDao.deleteByRid(id);
			return true;
		}
		return false;
	}





	@Override
	public Donor update(Donor b) {
		// TODO Auto-generated method stub
		return donorDao.save(b);
	}





	@Override
	public Donor findByRid(int id) {
		// TODO Auto-generated method stub
		return donorDao.findByRid(id);
	}
	

}


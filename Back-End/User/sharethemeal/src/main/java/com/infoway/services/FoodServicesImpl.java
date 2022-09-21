package com.infoway.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infoway.daos.FoodDao;
import com.infoway.entites.Food;


@Transactional
@Service
public class FoodServicesImpl implements FoodService {
	
	
	@Autowired
	private FoodDao foodDao;
	

	@Override
	public Food save(Food d) {
		// TODO Auto-generated method stub
		return foodDao.save(d);
	}

	@Override
	public List<Food> findAll() {
		// TODO Auto-generated method stub
		return foodDao.findAll();
	}

	@Override
	public boolean deleteByRid(int id) {
		if(foodDao.existsById(id)) {
			foodDao.deleteByFid(id);
			return true;
		}
		return false;
	}

}

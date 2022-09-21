package com.infoway.services;

import java.util.List;

import com.infoway.entites.Food;

public interface FoodService {
	

	Food save(Food d);
	
	List<Food> findAll();
	boolean deleteByRid(int id);

}

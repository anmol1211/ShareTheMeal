package com.infoway.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.infoway.entites.Food;

public interface FoodDao  extends JpaRepository<Food, Integer> {
	
	
	Food save(Food d);
	
	List<Food> findAll();
	void deleteByFid(int id);

}


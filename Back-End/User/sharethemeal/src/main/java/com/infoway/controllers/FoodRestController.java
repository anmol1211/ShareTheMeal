package com.infoway.controllers;





import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.entites.Donor;
import com.infoway.entites.Food;

import com.infoway.services.FoodService;



@CrossOrigin
@RestController
public class FoodRestController {
	
	@Autowired
	private FoodService foodServices;
	
	@PostMapping("/donors/addFood")
	private String registerUser(@RequestBody Food f) {
		
		foodServices.save(f);
		System.out.println("Food Added");
		return "added successfully";

	}
	
	@GetMapping("/donors/food")
	public ResponseEntity<List<Food>> findAll() {
		List<Food> list = foodServices.findAll();
		return ResponseEntity.ok(list);
	}

}

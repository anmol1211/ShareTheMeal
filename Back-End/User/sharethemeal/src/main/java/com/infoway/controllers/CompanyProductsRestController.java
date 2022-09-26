package com.infoway.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.entites.CompanyProducts;
import com.infoway.entites.Donor;
import com.infoway.services.CompanyProductsServices;



@CrossOrigin
@RestController
public class CompanyProductsRestController {
	
	@Autowired
	private CompanyProductsServices cProductsServices;
	@GetMapping("/companyProducts")
	public ResponseEntity<List<CompanyProducts>> findAll() {
		List<CompanyProducts> list = cProductsServices.findAll();
		return ResponseEntity.ok(list);
	}
	
	
	@PostMapping("/companyProducts/registerUser")
	//@DeleteMapping("/donors/registerUser")
	private String registerUser(@RequestBody CompanyProducts d) {
		
		cProductsServices.save(d);
		System.out.println("user Added");
		return "added successfully";

	}

}

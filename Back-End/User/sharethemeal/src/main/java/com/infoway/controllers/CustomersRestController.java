package com.infoway.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.entites.Customers;
import com.infoway.entites.Donor;
import com.infoway.services.CustomersServices;

@CrossOrigin
@RestController
public class CustomersRestController {
	
	
	@Autowired
	private CustomersServices custServices;
	
	
	@PostMapping("/customers/login") 
	 public Customers findUser(@RequestBody Customers c) {
		Customers d=custServices.login(c);
		return d;
	    
	  }
	
	@PostMapping("/customers/registerUser")
	private String registerUser(@RequestBody Customers d) {
		
		custServices.add(d);
		System.out.println("user Added hii");
		return "added successfully";

	}
	
	@GetMapping("/customers/id/{id}")
	public Customers findById(@PathVariable("id") int id) {
		Customers res = custServices.findByCid(id);
//		if(donor == null)
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return res;
	}

}

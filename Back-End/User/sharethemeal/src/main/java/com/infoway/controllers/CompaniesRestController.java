package com.infoway.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.entites.Companies;
import com.infoway.entites.Donor;
import com.infoway.services.CompnayInteface;


@CrossOrigin
@RestController
public class CompaniesRestController  {
	@Autowired
	private CompnayInteface compnayService;
	
	
//	@PostMapping("/companies/login") 
//	 public Companies findUser(@RequestBody Companies c) { 
//		System.out.println(c);
//		Companies d=compnayService.findByCemail(c);
//	  System.out.println(d);
//		return d;
//	    
//	  }
	
	@PostMapping("/companies/login") 
	 public Companies findUser(@RequestBody Companies c) {
		System.out.println(c);
		Companies d=compnayService.findByCemail(c);
		System.out.println(d);
		return d;
	    
	  }
	
	@GetMapping("/companies")
	public ResponseEntity<List<Companies>> findAll() {
		List<Companies> list = compnayService.findAll();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping("/companies/registerUser")
	//@DeleteMapping("/donors/registerUser")
	private String registerUser(@RequestBody Companies donor) {
		
		compnayService.save(donor);
		System.out.println("user Added");
		return "added successfully";

	}

}

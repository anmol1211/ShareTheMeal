package com.infoway.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.entites.Companies;
import com.infoway.entites.Donor;
import com.infoway.services.CompnayInteface;

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

}

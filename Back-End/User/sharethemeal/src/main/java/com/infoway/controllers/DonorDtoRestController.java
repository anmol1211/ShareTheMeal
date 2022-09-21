package com.infoway.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.entites.Donor;
import com.infoway.services.DonorService;

@CrossOrigin
@RestController
public class DonorDtoRestController {

	@Autowired
	private DonorService donorServices;
	
	@GetMapping("/donors/email/{email}")
	public ResponseEntity<Donor> findByEmail(@PathVariable("email") String email) {
		Donor donor = donorServices.findByEmail(email);
		if(donor == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(donor);
	}
	
	@PostMapping("/donors/registerUser")
	//@DeleteMapping("/donors/registerUser")
	private String registerUser(@RequestBody Donor donor) {
		
		donorServices.save(donor);
		System.out.println("user Added");
		return "added successfully";

	}
	
	 @PostMapping("/donors/login") 
	 public Donor findUser(@RequestBody Donor donor) {
		/*
		 BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String password = user.getPassword();
			String encodedPassword = passwordEncoder.encode(password);

			System.out.println("Password is         : " + password);
			System.out.println("Encoded Password is : " + encodedPassword);
			System.out.println();

			boolean isPasswordMatch = passwordEncoder.matches(password, encodedPassword);
			
			if(isPasswordMatch == true) {
				User userObj=userService.findUser(user);
				return userObj;	
			}
			else {
				 return null;
			}
		*/
		
		 
		 
	  Donor d=donorServices.findEamil(donor);
		return d;
	    
	  }
	 
	 @GetMapping("/donors")
		public ResponseEntity<List<Donor>> findAll() {
			List<Donor> list = donorServices.findAll();
			return ResponseEntity.ok(list);
		}
	 
//	 @GetMapping("/donors/id/{id}")
	 @DeleteMapping("/donors/id/{id}")
		public boolean findByEmail(@PathVariable("id") int id) {
			boolean res = donorServices.deleteById(id);
//			if(donor == null)
//				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return res;
		}
	 
	 @GetMapping("/donors/id/{id}")
		public Donor findById(@PathVariable("id") int id) {
			Donor res = donorServices.findByRid(id);
//			if(donor == null)
//				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return res;
		}
	 
	 
}

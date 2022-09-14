package com.infoway.controllers;

import java.util.ArrayList;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.dtos.Credentials;
import com.infoway.entites.Donor;
import com.infoway.services.DonorService;

@RestController
public class LoginControllerImpl {
	
	@Autowired
	private DonorService donorService;
	
//	@GetMapping("/donors/email/{email}")
//	public ResponseEntity<Donor> findByEmail(@PathVariable("email") String email) {
//		Donor donor = donorServices.findByEmail(email);
//		if(donor == null)
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//		return ResponseEntity.ok(donor);
//	}
	
	//@RequestMapping("/authenticate")
	@GetMapping("/authenticate")
	public String authenticate(@Valid @ModelAttribute("cred") Credentials cred, BindingResult res) { // Credentials object is model obj to collect req param email and password.
		System.out.println(cred);
		System.out.println(res);
		if(res.hasErrors())
			return "login"; // view: login.jsp
		Donor donor = donorService.authenticate(cred.getEmail(), cred.getPassword());
		if(donor != null) {
//			session.setAttribute("cust", donor);
//			session.setAttribute("cart", new ArrayList<Integer>());
			System.out.println(donor);
			return "redirect:subjects"; 
		}
		return "failed"; 
	}
	
	


}

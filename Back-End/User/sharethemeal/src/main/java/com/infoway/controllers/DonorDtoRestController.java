package com.infoway.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.infoway.entites.Donor;
import com.infoway.services.DonorService;

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
}

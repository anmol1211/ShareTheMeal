package com.infoway.entites;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="donorfood")
public class Food {
	@Id
	private int fid;
	private String fqty;
	
	private int rid; 

}

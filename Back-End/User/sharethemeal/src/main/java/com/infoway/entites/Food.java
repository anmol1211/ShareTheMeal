package com.infoway.entites;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="donorfood")
public class Food {
	@Id
	private int fid;
	private String fqty;
//	private int rid;
	@ManyToOne
	@JoinColumn(name="rid")
	private Donor donor;
	//private int rid;
	
	public Food() {
		// TODO Auto-generated constructor stub
	}

	public Food(int fid, String fqty) {
		super();
		this.fid = fid;
		this.fqty = fqty;
		//this.rid = rid;
	}

	public Food(int fid, String fqty, Donor donor) {
		super();
		this.fid = fid;
		this.fqty = fqty;
		this.donor = donor;
	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public String getFqty() {
		return fqty;
	}

	public void setFqty(String fqty) {
		this.fqty = fqty;
	}

	public Donor getDonor() {
		return donor;
	}

	public void setDonor(Donor donor) {
		this.donor = donor;
	}
	
	

	
	
	

}

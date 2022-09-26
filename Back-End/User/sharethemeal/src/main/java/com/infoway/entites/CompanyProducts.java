package com.infoway.entites;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="foodproduct")
public class CompanyProducts {

	 @Id
	 private int fid;   
	 private String fname; 
	 private int fprice;
	 private int fqty;
	 
	 
	 public CompanyProducts() {
		// TODO Auto-generated constructor stub
	}


	public CompanyProducts(int fid, String fname, int fprice, int fqty) {
		super();
		this.fid = fid;
		this.fname = fname;
		this.fprice = fprice;
		this.fqty = fqty;
	}


	public int getFid() {
		return fid;
	}


	public void setFid(int fid) {
		this.fid = fid;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public int getFprice() {
		return fprice;
	}


	public void setFprice(int fprice) {
		this.fprice = fprice;
	}


	public int getFqty() {
		return fqty;
	}


	public void setFqty(int fqty) {
		this.fqty = fqty;
	}


	@Override
	public String toString() {
		return "CompanyProducts [fid=" + fid + ", fname=" + fname + ", fprice=" + fprice + ", fqty=" + fqty + "]";
	}


	
	 
	 
	 
}

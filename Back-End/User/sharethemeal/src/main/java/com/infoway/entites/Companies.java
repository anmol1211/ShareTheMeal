package com.infoway.entites;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="companies")
public class Companies {
	
	
	
	
	@Id
	private int cid;     
	private String cname;    
	private String caddr;  
	private String cphone;    
	private String cemail;    
	private String cpass;
	private int citypincode;
	
	public Companies() {
		// TODO Auto-generated constructor stub
	}

	public Companies(int cid, String cname, String caddr, String cphone, String cemail, String cpass, int citypincode) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.caddr = caddr;
		this.cphone = cphone;
		this.cemail = cemail;
		this.cpass = cpass;
		this.citypincode = citypincode;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCaddr() {
		return caddr;
	}

	public void setCaddr(String caddr) {
		this.caddr = caddr;
	}

	public String getCphone() {
		return cphone;
	}

	public void setCphone(String cphone) {
		this.cphone = cphone;
	}

	public String getCemail() {
		return cemail;
	}

	public void setCemail(String cemail) {
		this.cemail = cemail;
	}

	public String getCpass() {
		return cpass;
	}

	public void setCpass(String cpass) {
		this.cpass = cpass;
	}

	public int getCitypincode() {
		return citypincode;
	}

	public void setCitypincode(int citypincode) {
		this.citypincode = citypincode;
	}

	@Override
	public String toString() {
		return "Companies [cid=" + cid + ", cname=" + cname + ", caddr=" + caddr + ", cphone=" + cphone + ", cemail="
				+ cemail + ", cpass=" + cpass + ", citypincode=" + citypincode + "]";
	}

	

}
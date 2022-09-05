
package com.CMS2.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class FeesModel {
	@Id 
	int id;
	String firstname;
	String lastname;
	String branch;
	String year;
	String sem;
	String mobileno;
	String date;
	String pmode;
	String accno;
	String fees;
	
	public FeesModel() {
		
	}
	public FeesModel(int id,String firstname,String lastname,String branch,String year,String sem,String mobileno,String date,String pmode,String accno,String fees) {
		super();
		this.id=id;
		this.firstname=firstname;
		this.lastname=lastname;
		this.branch=branch;
		this.year=year;
		this.sem=sem;
		this.mobileno=mobileno;
		this.date=date;
		this.pmode=pmode;
		this.accno=accno;
		this.fees=fees;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getSem() {
		return sem;
	}
	public void setSem(String sem) {
		this.sem = sem;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getPmode() {
		return pmode;
	}
	public void setPmode(String pmode) {
		this.pmode = pmode;
	}
	public String getAccno() {
		return accno;
	}
	public void setAccno(String accno) {
		this.accno = accno;
	}
	public String getFees() {
		return fees;
	}
	public void setFees(String fees) {
		this.fees = fees;
	}
	
	
}

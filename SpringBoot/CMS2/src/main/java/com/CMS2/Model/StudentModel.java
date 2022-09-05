package com.CMS2.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StudentModel {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	//int rollno;
	String firstname;
	String lastname;
	String gender;
	String branch;
	String year;
	String sem;
	String mobileno;
	String email;
	String password;
	
	public StudentModel() {
		
	}
	public StudentModel(int id,String firstname,String lastname,String gender,String branch,String year,String sem,String mobileno,String email,String password) {
		super();
		this.id=id;
		this.firstname=firstname;
		this.lastname=lastname;
		this.gender=gender;
		this.branch=branch;
		this.year=year;
		this.sem=sem;
		this.mobileno=mobileno;
		this.email=email;
		this.password=password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}

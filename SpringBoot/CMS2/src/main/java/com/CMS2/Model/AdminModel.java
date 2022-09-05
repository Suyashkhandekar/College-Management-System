package com.CMS2.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AdminModel {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	//private int id;
	String firstname;
	String lastname;
	String email;
	String password;
	
	public AdminModel() {
		
	}
	public AdminModel(String firstname,String lastname,String email,String password) {
		super();
		this.firstname=firstname;
		this.lastname=lastname;
		this.email=email;
		this.password=password;
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

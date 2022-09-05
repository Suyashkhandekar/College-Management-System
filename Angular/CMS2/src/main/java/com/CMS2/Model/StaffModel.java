
package com.CMS2.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StaffModel  {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	//int rollno;
	String firstname;
	String lastname;
	String gender;
	String designation;
	String mobileno;
	String email;
	String password;
	
	public StaffModel () {
		
	}
	public StaffModel (int id,String firstname,String lastname,String gender,String designation,String mobileno,String email,String password) {
		super();
		this.id=id;
		this.firstname=firstname;
		this.lastname=lastname;
		this.gender=gender;
		this.designation=designation;
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
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
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

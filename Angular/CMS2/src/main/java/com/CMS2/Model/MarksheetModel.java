
package com.CMS2.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MarksheetModel {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	//int rollno;
	String firstname;
	String lastname;
	String mI;
	String physics;
	String chemistry;
	String enggdraw;
	String totalmarks;
	
	public MarksheetModel() {
		
	}
	public MarksheetModel(int id,String firstname,String lastname,String mI,String physics,String chemistry,String enggdraw,String totalmarks) {
		super();
		this.id=id;
		this.firstname=firstname;
		this.lastname=lastname;
		this.mI=mI;
		this.physics=physics;
		this.chemistry=chemistry;
		this.enggdraw=enggdraw;
		this.totalmarks=totalmarks;
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
	public String getmI() {
		return mI;
	}
	public void setmI(String mI) {
		this.mI = mI;
	}
	public String getPhysics() {
		return physics;
	}
	public void setPhysics(String physics) {
		this.physics = physics;
	}
	public String getChemistry() {
		return chemistry;
	}
	public void setChemistry(String chemistry) {
		this.chemistry = chemistry;
	}
	public String getEnggdraw() {
		return enggdraw;
	}
	public void setEnggdraw(String enggdraw) {
		this.enggdraw = enggdraw;
	}
	public String getTotalmarks() {
		return totalmarks;
	}
	public void setTotalmarks(String totalmarks) {
		this.totalmarks = totalmarks;
	}
	
}

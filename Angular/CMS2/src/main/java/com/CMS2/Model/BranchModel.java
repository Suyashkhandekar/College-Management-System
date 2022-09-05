
package com.CMS2.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BranchModel {
	@Id 
	//@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String branch;
	
	public BranchModel() {
		
	}
	public BranchModel(int id,String branch) {
		super();
		this.id=id;
		this.branch=branch;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	
}

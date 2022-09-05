
package com.CMS2.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CMS2.Model.EEFacultyModel;

public interface EEFacultyDAO extends JpaRepository<EEFacultyModel,Integer>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<EEFacultyModel> findById(String email);

	EEFacultyModel findByEmail(String email);

	
}

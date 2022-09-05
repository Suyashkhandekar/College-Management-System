
package com.CMS2.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CMS2.Model.MarksheetModel;
import com.CMS2.DAO.MarksheetDAO;

@Service
public class MarksheetService {


	@Autowired
	MarksheetDAO ld;
	public MarksheetService() {
		
	}
	
	public List<MarksheetModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void saveStudent(MarksheetModel ll) {
		ld.save(ll);
	}

	public void updateStudent(MarksheetModel ll1) {
		ld.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/
	
	public void deleteStudent(MarksheetModel id) {
		ld.delete(id);
		
	}
	
//	public StudentModel getStudentById(String email) {
//		Optional<StudentModel> pm=ld.findById(email);
//		if(pm.isPresent()) {
//			//System.out.println(pm.get().getName());
//			return pm.get();
//		}else 
//		return null;
//		 
//	}

//	public void saveUser(StudentModel ll) {
//		// TODO Auto-generated method stub
//		ld.save(ll);
//		
//	}

//	public StudentModel fetchUserByEmail(String email) {
//		// TODO Auto-generated method stub
//		return ld.findByEmail(email);
//	}	
//	
//	public StudentModel fetchUserByEmailAndPassword(String email,String password) {
//		// TODO Auto-generated method stub
//		return ld.findByEmailAndPassword(email,password);
//	}

}

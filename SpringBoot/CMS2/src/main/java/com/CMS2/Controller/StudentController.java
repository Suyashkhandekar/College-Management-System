package com.CMS2.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CMS2.Model.StudentModel;
import com.CMS2.Service.StudentService;
import com.CMS2.DAO.StudentDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StudentController {
@Autowired
StudentService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("viewstudent")
public List<StudentModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("view")
public StudentModel getStudent(@RequestBody StudentModel id) {
	String id1=id.getEmail();
	return l.getStudentById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("addstudent")
public void saveL(@RequestBody StudentModel ll) {
	
	l.saveStudent(ll);

}


@PostMapping("updatestudent")
public void updateL(@RequestBody StudentModel ll) {
	
	l.updateStudent(ll);

}

@PostMapping("deletestudent")
public void deleteL(@RequestBody StudentModel id) {
	
	l.deleteStudent(id);

}

@Autowired
private StudentDAO gDOA;
@PostMapping("loginstudent")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody StudentModel userData){
	StudentModel user=gDOA.findByEmail(userData.getEmail());
	System.out.println(user);
	if(user.getPassword().equals(userData.getPassword()))
		return ResponseEntity.ok(user);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	



//@PostMapping("insert")
//@CrossOrigin(origins="http://localhost:4200")
//public void save(@RequestBody StudentModel ll)throws Exception {
//	String tempEmailId=ll.getEmailid();
//	if(tempEmailId != null && !"".equals(tempEmailId)) {
//		StudentModel llobj=l.fetchUserByEmail(tempEmailId);
//		if(llobj !=null) {
//			throw new Exception("user with"+tempEmailId+"already exist");
//		}
//	}
//	
//	l.saveUser(ll);
//
//}


}

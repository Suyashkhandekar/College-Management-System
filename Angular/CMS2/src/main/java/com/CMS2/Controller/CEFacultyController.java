
package com.CMS2.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CMS2.Model.CEFacultyModel;
import com.CMS2.Service.CEFacultyService;
import com.CMS2.DAO.CEFacultyDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CEFacultyController {
@Autowired
CEFacultyService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("viewcefaculty")
public List<CEFacultyModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("viewcef")
public CEFacultyModel getStudent(@RequestBody CEFacultyModel id) {
	String id1=id.getEmail();
	return l.getStudentById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("addcefaculty")
public void saveL(@RequestBody CEFacultyModel ll) {
	
	l.saveStudent(ll);

}


@PostMapping("updatecefaculty")
public void updateL(@RequestBody CEFacultyModel ll) {
	
	l.updateStudent(ll);

}

@PostMapping("deletecefaculty")
public void deleteL(@RequestBody CEFacultyModel id) {
	
	l.deleteStudent(id);

}

@Autowired
private CEFacultyDAO gDOA;
@PostMapping("logincefaculty")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody CEFacultyModel facultyData){
	CEFacultyModel faculty=gDOA.findByEmail(facultyData.getEmail());
	System.out.println(faculty);
	if(faculty.getPassword().equals(facultyData.getPassword()))
		return ResponseEntity.ok(faculty);
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

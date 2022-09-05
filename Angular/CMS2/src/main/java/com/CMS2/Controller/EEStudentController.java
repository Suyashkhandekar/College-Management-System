
package com.CMS2.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CMS2.Model.EEStudentModel;
import com.CMS2.Service.EEStudentService;
import com.CMS2.DAO.EEStudentDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EEStudentController {
@Autowired
EEStudentService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("vieweestudent")
public List<EEStudentModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("viewee")
public EEStudentModel getStudent(@RequestBody EEStudentModel id) {
	String id1=id.getEmail();
	return l.getStudentById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("addeestudent")
public void saveL(@RequestBody EEStudentModel ll) {
	
	l.saveStudent(ll);

}


@PostMapping("updateeestudent")
public void updateL(@RequestBody EEStudentModel ll) {
	
	l.updateStudent(ll);

}

@PostMapping("deleteeestudent")
public void deleteL(@RequestBody EEStudentModel id) {
	
	l.deleteStudent(id);

}

@Autowired
private EEStudentDAO gDOA;
@PostMapping("logineestudent")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody EEStudentModel userData){
	EEStudentModel user=gDOA.findByEmail(userData.getEmail());
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

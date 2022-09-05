
package com.CMS2.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CMS2.Model.CEStudentModel;
import com.CMS2.Service.CEStudentService;
import com.CMS2.DAO.CEStudentDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CEStudentController {
@Autowired
CEStudentService l;
//GET
//@RequestMapping(value="/login",method=RequestMethod.GET)
@GetMapping("viewcestudent")
public List<CEStudentModel> getLogin() {
	
	return l.getAllLogin();

}

@PostMapping("viewce")
public CEStudentModel getStudent(@RequestBody CEStudentModel id) {
	String id1=id.getEmail();
	return l.getStudentById(id1);
}

//POST
//@RequestMapping(value="/save",method=RequestMethod.POST)
@PostMapping("addcestudent")
public void saveL(@RequestBody CEStudentModel ll) {
	
	l.saveStudent(ll);

}


@PostMapping("updatecestudent")
public void updateL(@RequestBody CEStudentModel ll) {
	
	l.updateStudent(ll);

}

@PostMapping("deletecestudent")
public void deleteL(@RequestBody CEStudentModel id) {
	
	l.deleteStudent(id);

}

@Autowired
private CEStudentDAO gDOA;
@PostMapping("logincestudent")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody CEStudentModel userData){
	CEStudentModel user=gDOA.findByEmail(userData.getEmail());
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

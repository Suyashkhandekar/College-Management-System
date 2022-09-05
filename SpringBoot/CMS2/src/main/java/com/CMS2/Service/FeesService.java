
package com.CMS2.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CMS2.Model.FeesModel;
import com.CMS2.DAO.FeesDAO;

@Service
public class FeesService {


	@Autowired
	FeesDAO ld;
	public FeesService() {
		
	}
	
	public List<FeesModel> getAllLogin(){
		
		return ld.findAll();
	}
	
	public void saveStudent(FeesModel ll) {
		ld.save(ll);
	}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }

  
  url5="http://localhost:8080/insertadmin"
  url6="http://localhost:8080/loginadmin"
  url7="http://localhost:8080/viewadmin"

  url1="http://localhost:8080/addstudent"
  url2="http://localhost:8080/loginstudent"
  url3="http://localhost:8080/viewstudent"
  url11="http://localhost:8080/updatestudent"
  url12="http://localhost:8080/deletestudent"

  url15="http://localhost:8080/addeestudent"
  url16="http://localhost:8080/logineestudent"
  url17="http://localhost:8080/vieweestudent"
  url18="http://localhost:8080/updateeestudent"
  url19="http://localhost:8080/deleteeestudent"

  url20="http://localhost:8080/addcestudent"
  url21="http://localhost:8080/logincestudent"
  url22="http://localhost:8080/viewcestudent"
  url23="http://localhost:8080/updatecestudent"
  url24="http://localhost:8080/deletecestudent"

  url8="http://localhost:8080/addmefaculty"
  url9="http://localhost:8080/loginmefaculty"
  url10="http://localhost:8080/viewmefaculty"
  url13="http://localhost:8080/updatemefaculty"
  url14="http://localhost:8080/deletemefaculty"

  url25="http://localhost:8080/addeefaculty"
  url26="http://localhost:8080/logineefaculty"
  url27="http://localhost:8080/vieweefaculty"
  url28="http://localhost:8080/updateeefaculty"
  url29="http://localhost:8080/deleteeefaculty"

  url30="http://localhost:8080/addcefaculty"
  url31="http://localhost:8080/logincefaculty"
  url32="http://localhost:8080/viewcefaculty"
  url33="http://localhost:8080/updatecefaculty"
  url34="http://localhost:8080/deletecefaculty"

  url35="http://localhost:8080/addstaff"
  url36="http://localhost:8080/loginstaff"
  url37="http://localhost:8080/viewstaff"
  url38="http://localhost:8080/updatestaff"
  url39="http://localhost:8080/deletestaff"


  url40="http://localhost:8080/addbranch"
  url41="http://localhost:8080/viewbranch"
  url42="http://localhost:8080/deletebranch"


  url43="http://localhost:8080/addnotify"
  url44="http://localhost:8080/viewnotify"
  url45="http://localhost:8080/deletenotify"


  url46="http://localhost:8080/addmemarksheet"
  url47="http://localhost:8080/viewmemarksheet"
  url48="http://localhost:8080/deletememarksheet"
  url49="http://localhost:8080/updatememarksheet"

  url50="http://localhost:8080/addfees"
  url51="http://localhost:8080/viewfees"

  loginservice2(data3:any){
    return this.http.post(this.url6, data3);
  }

  public loginAdminFromRemote(admin:UserComponent):Observable<object>{
    console.log(admin);
    return this.http.post(this.url6,admin);
    
  }



  addStudent(data:any){
    return this.http.post(this.url1, data);
  }
  viewStudent(){
    return this.http.get(this.url3);
  }
  updateStudent(value:any){
    return this.http.post(this.url11, value);
  }
  deleteStudent(data:any){
    return this.http.post(this.url12, data);
  }

  loginservice1(data2:any){
    return this.http.post(this.url2, data2);
  }

  public loginUserFromRemote(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url2,user);
    
  }


  addEEStudent(data:any){
    return this.http.post(this.url15, data);
  }
  viewEEStudent(){
    return this.http.get(this.url17);
  }
  updateEEStudent(value:any){
    return this.http.post(this.url18, value);
  }
  deleteEEStudent(data:any){
    return this.http.post(this.url19, data);
  }

  loginservice1EE(data2:any){
    return this.http.post(this.url16, data2);
  }

  public loginUserFromRemoteEE(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url16,user);
    
  }


  addCEStudent(data:any){
    return this.http.post(this.url20, data);
  }
  viewCEStudent(){
    return this.http.get(this.url22);
  }
  updateCEStudent(value:any){
    return this.http.post(this.url23, value);
  }
  deleteCEStudent(data:any){
    return this.http.post(this.url24, data);
  }

  loginservice1CE(data2:any){
    return this.http.post(this.url21, data2);
  }

  public loginUserFromRemoteCE(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(this.url21,user);
    
  }



  addMEFaculties(data:any){
    return this.http.post(this.url8, data);
  }
  viewMEFaculties(){
    return this.http.get(this.url10);
  }
  updateMEFaculties(value:any){
    return this.http.post(this.url13, value);
  }
  deleteMEFaculties(data:any){
    return this.http.post(this.url14, data);
  }

  loginservice3(data4:any){
    return this.http.post(this.url9, data4);
  }

  public loginFacultyFromRemote(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url9,faculty);
    
  }
  
  addEEFaculties(data:any){
    return this.http.post(this.url25, data);
  }
  viewEEFaculties(){
    return this.http.get(this.url27);
  }
  updateEEFaculties(value:any){
    return this.http.post(this.url28, value);
  }
  deleteEEFaculties(data:any){
    return this.http.post(this.url29, data);
  }

  loginservice3EE(data4:any){
    return this.http.post(this.url26, data4);
  }

  public loginFacultyFromRemoteEE(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url26,faculty);
    
  }


  addCEFaculties(data:any){
    return this.http.post(this.url30, data);
  }
  viewCEFaculties(){
    return this.http.get(this.url32);
  }
  updateCEFaculties(value:any){
    return this.http.post(this.url33, value);
  }
  deleteCEFaculties(data:any){
    return this.http.post(this.url34, data);
  }

  loginservice3CE(data4:any){
    return this.http.post(this.url31, data4);
  }

  public loginFacultyFromRemoteCE(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url31,faculty);
    
  }

  addStaff(data:any){
    return this.http.post(this.url35, data);
  }
  viewStaff(){
    return this.http.get(this.url37);
  }
  updateStaff(value:any){
    return this.http.post(this.url38, value);
  }
  deleteStaff(data:any){
    return this.http.post(this.url39, data);
  }

  loginservice3Staff(data4:any){
    return this.http.post(this.url36, data4);
  }

  public loginFacultyFromRemoteStaff(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(this.url36,faculty);
    
  }


  addBranch(data:any){
    return this.http.post(this.url40, data);
  }
  viewBranch(){
    return this.http.get(this.url41);
  }
  deleteBranch(data:any){
    return this.http.post(this.url42, data);
  }


  addNotify(data:any){
    return this.http.post(this.url43, data);
  }
  viewNotify(){
    return this.http.get(this.url44);
  }
  deleteNotify(data:any){
    return this.http.post(this.url45, data);
  }


  addMEMarksheet(data:any){
    return this.http.post(this.url46, data);
  }
  viewMEMarksheet(){
    return this.http.get(this.url47);
  }
  updateMEMarksheet(value:any){
    return this.http.post(this.url49, value);
  }
  deleteMEMarksheet(data:any){
    return this.http.post(this.url48, data);
  }

  addFees(data:any){
    return this.http.post(this.url50, data);
  }
  viewFees(){
    return this.http.get(this.url51);
  }
}

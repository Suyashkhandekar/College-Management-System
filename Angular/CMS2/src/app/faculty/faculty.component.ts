import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { InsertService } from '../insert.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  //email: String="";
 // password: String ="";

  msg:String="";
  faculty: UserComponent= new UserComponent();

  constructor(private router:Router,private ls:InsertService,private authService:AuthService) { }

  ngOnInit(): void {
    //this.email="";
    //this.password="";
  }

  // goToPage(studentsignup:String){
  //   //this.router.navigate(['${about}']);
  //   this.router.navigateByUrl('/student-sign-up');
  // }

  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
 
  div1Function(){
      this.div1=true;
      this.div2=false;
      this.div3=false;
  }

  div2Function(){
      this.div2=true;
      this.div1=false;
      this.div3=false;
  }

  div3Function(){
      this.div3=true;
      this.div2=false;
      this.div1=false;
  }

//   div4Function(){
//     this.div2=false;
//     this.div1=false;
//     this.div3=false;
// }

  goToFaculty1(facultypanel:String){
    this.router.navigate(['${facultypanel}']);
  }

  loginData1(logindata:any){
    this.ls.loginservice3(logindata.value).subscribe();
  }

  loginFaculty1(){
    console.log(this.faculty)
    this.ls.loginFacultyFromRemote(this.faculty).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/facultypanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }

  goToFaculty2(eefacultypanel:String){
    this.router.navigate(['${eefacultypanel}']);
  }

  loginData2(logindata:any){
    this.ls.loginservice3EE(logindata.value).subscribe();
  }

  loginFaculty2(){
    console.log(this.faculty)
    this.ls.loginFacultyFromRemoteEE(this.faculty).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/eefacultypanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }

  goToFaculty3(cefacultypanel:String){
    this.router.navigate(['${cefacultypanel}']);
  }

  loginData3(logindata:any){
    this.ls.loginservice3CE(logindata.value).subscribe();
  }

  loginFaculty3(){
    console.log(this.faculty)
    this.ls.loginFacultyFromRemoteCE(this.faculty).subscribe(
       _data=>{
        //this.msg1='You logged in successfully';
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/cefacultypanel');
      },
      _error=>{
        this.msg='Please recheck your password and emailid';
        //alert("logged in successfully");
        console.log("Error");
        //alert("Failed login");
        //this.router.navigateByUrl('/afterloginnavigation');
      }
    )
  }


}

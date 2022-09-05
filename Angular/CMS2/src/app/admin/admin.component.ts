import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { InsertService } from '../insert.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  //email: String="";
  // password: String ="";
 
   msg:String="";
   admin: UserComponent= new UserComponent();
 
   constructor(private router:Router,private ls:InsertService,private authService:AuthService) { }
 
   ngOnInit(): void {
     //this.email="";
     //this.password="";
   }
 
  //  goToPage(studentsignup:String){
  //    //this.router.navigate(['${about}']);
  //    this.router.navigateByUrl('/student-sign-up');
  //  }
 
   goToAdmin(adminpanel:String){
     this.router.navigate(['${adminpanel}']);
   }
 
   loginData(logindata:any){
     this.ls.loginservice2(logindata.value).subscribe();
   }
 
   loginAdmin(){
     console.log(this.admin)
     this.ls.loginAdminFromRemote(this.admin).subscribe(
        _data=>{
         //this.msg1='You logged in successfully';
         alert("logged in successfully");
         console.log("Successfull");
         this.router.navigateByUrl('/adminpanel');
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
  
  // click(){
  //   alert("Your are successfully SignIn");
  //   this.router.navigateByUrl("/adminpanel");
    

  // }

}

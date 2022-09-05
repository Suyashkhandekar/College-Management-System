import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-cefaculties',
  templateUrl: './cefaculties.component.html',
  styleUrls: ['./cefaculties.component.css']
})
export class CefacultiesComponent implements OnInit {

  
  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addCEFaculties(insert.value).subscribe();
    alert('You Have successfully added faculty data');
    window.location.reload();
  }

  loginpage:any;
  updateLoginpage(data:any){
    this.ps1.updateCEFaculties(data.value).subscribe();
    alert('You Have successfully updated faculty data');
    window.location.reload();
  }

  deleteLoginpage(data:any){
    this.ps.deleteCEFaculties(data.value).subscribe();
    alert('You Have successfully deleted faculty data');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewCEFaculties().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }
 
    div1:boolean=false;
    div2:boolean=false;
    div3:boolean=false;
    div4:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false;
        this.div4=false;
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false;
        this.div4=false;
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false;
        this.div4=false;
    }
  
    div4Function(){
      this.div4=true;
      this.div2=false;
      this.div1=false;
      this.div3=false;
  }

    div5Function(){
    this.div4=false;
    this.div2=false;
    this.div1=false;
    this.div3=false;
  }



}

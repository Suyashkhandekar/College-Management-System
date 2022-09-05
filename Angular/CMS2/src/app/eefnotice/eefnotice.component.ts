import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-eefnotice',
  templateUrl: './eefnotice.component.html',
  styleUrls: ['./eefnotice.component.css']
})
export class EefnoticeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

  insertdetails(insert:any){
    this.is.addNotify(insert.value).subscribe();
    alert('You Have successfully added notice');
    window.location.reload();
  }

  
  deleteLoginpage(data:any){
    this.ps.deleteNotify(data.value).subscribe();
    alert('You Have successfully deleted notice');
    window.location.reload();
  }

  loginpages:any;
  viewLoginpage(){
    this.is.viewNotify().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }
 
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
  
    div4Function(){
      this.div2=false;
      this.div1=false;
      this.div3=false;
  }


  
}

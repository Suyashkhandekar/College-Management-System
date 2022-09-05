import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-mesmarksheet',
  templateUrl: './mesmarksheet.component.html',
  styleUrls: ['./mesmarksheet.component.css']
})
export class MesmarksheetComponent implements OnInit {

 
  ngOnInit(): void {
  }

  constructor(private is:InsertService,private ps1:InsertService,private ps:InsertService,private router:Router) {

    this.viewLoginpage();
   }

   loginpages:any;
  viewLoginpage(){
    this.is.viewMEMarksheet().subscribe((resp1:any)=>{this.loginpages=resp1;});
  }

}

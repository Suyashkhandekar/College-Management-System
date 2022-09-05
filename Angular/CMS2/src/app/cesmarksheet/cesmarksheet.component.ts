import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-cesmarksheet',
  templateUrl: './cesmarksheet.component.html',
  styleUrls: ['./cesmarksheet.component.css']
})
export class CesmarksheetComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-eesmarksheet',
  templateUrl: './eesmarksheet.component.html',
  styleUrls: ['./eesmarksheet.component.css']
})
export class EesmarksheetComponent implements OnInit {

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

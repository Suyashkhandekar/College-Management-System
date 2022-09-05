import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-mesfees',
  templateUrl: './mesfees.component.html',
  styleUrls: ['./mesfees.component.css']
})
export class MesfeesComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private is:InsertService,private router:Router) {

   }

  insertdetails(insert:any){
    this.is.addFees(insert.value).subscribe();
    alert('You Have successfully paid your fees');
    window.location.reload();
  }

}

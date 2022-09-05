import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-eesfees',
  templateUrl: './eesfees.component.html',
  styleUrls: ['./eesfees.component.css']
})
export class EesfeesComponent implements OnInit {

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

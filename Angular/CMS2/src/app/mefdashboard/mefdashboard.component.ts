import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mefdashboard',
  templateUrl: './mefdashboard.component.html',
  styleUrls: ['./mefdashboard.component.css']
})
export class MefdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/mefstudents");
  }

  marksheet(){
    this.router.navigateByUrl("/mefmarksheet");
  }

  // notice(){
  //   this.router.navigateByUrl("/mefnotice");
  // }

}

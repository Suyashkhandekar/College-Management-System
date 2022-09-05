import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eefdashboard',
  templateUrl: './eefdashboard.component.html',
  styleUrls: ['./eefdashboard.component.css']
})
export class EefdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/eefstudents");
  }

  marksheet(){
    this.router.navigateByUrl("/eefmarksheet");
  }

  // notice(){
  //   this.router.navigateByUrl("/mefnotice");
  // }
}

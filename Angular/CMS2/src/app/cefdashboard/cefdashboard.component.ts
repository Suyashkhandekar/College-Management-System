import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cefdashboard',
  templateUrl: './cefdashboard.component.html',
  styleUrls: ['./cefdashboard.component.css']
})
export class CefdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/cefstudents");
  }

  marksheet(){
    this.router.navigateByUrl("/cefmarksheet");
  }

}

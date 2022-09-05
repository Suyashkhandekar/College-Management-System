import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/astudents");
  }

  faculties(){
    this.router.navigateByUrl("/afaculties");
  }

  staff(){
    this.router.navigateByUrl("/astaff");
  }

  courses(){
    this.router.navigateByUrl("/acourse");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cesdashboard',
  templateUrl: './cesdashboard.component.html',
  styleUrls: ['./cesdashboard.component.css']
})
export class CesdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/cesmarksheet");
  }

  marksheet(){
    this.router.navigateByUrl("/cesfees");
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesdashboard',
  templateUrl: './mesdashboard.component.html',
  styleUrls: ['./mesdashboard.component.css']
})
export class MesdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/mesmarksheet");
  }

  marksheet(){
    this.router.navigateByUrl("/mesfees");
  }

  // notice(){
  //   this.router.navigateByUrl("/mefnotice");
  // }
}

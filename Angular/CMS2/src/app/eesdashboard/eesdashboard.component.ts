import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eesdashboard',
  templateUrl: './eesdashboard.component.html',
  styleUrls: ['./eesdashboard.component.css']
})
export class EesdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  students(){
    this.router.navigateByUrl("/eesmarksheet");
  }

  marksheet(){
    this.router.navigateByUrl("/eesfees");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';


@Component({
  selector: 'app-afaculties',
  templateUrl: './afaculties.component.html',
  styleUrls: ['./afaculties.component.css']
})
export class AfacultiesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  me(){
    this.router.navigateByUrl("/mefaculties");
  }
  ee(){
    this.router.navigateByUrl("/eefaculties");
  }
  ce(){
    this.router.navigateByUrl("/cefaculties");
  }
}

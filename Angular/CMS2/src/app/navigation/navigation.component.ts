import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { InsertService } from '../insert.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  visible: boolean;
  viewedPage: any;

  constructor(public nav: InsertService,public nav1: NavbarService,private router: Router, private activatedRoute: ActivatedRoute ) {
    this.visible = true; // set toolbar visible to false
   }

  ngOnInit(){
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
    )
    .pipe(
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),
    )
    .subscribe(event => {
      this.viewedPage = event['title']; // title of page
      this.showNavigation(event['navigation']); // show the toolbar?
    });
  }
  
  showNavigation(event: boolean) {
    if (event === false) {
      this.visible = false;
    } else if (event === true) {
      this.visible = true;
    } else {
      this.visible = this.visible;
    }
  }

}





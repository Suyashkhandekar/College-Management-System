import { Component, OnInit ,Inject, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { InsertService } from '../insert.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    visible: boolean;
    viewedPage: any;
  windowScrolled: boolean | undefined;
  constructor(@Inject(DOCUMENT) private document: Document,public nav: InsertService,public nav1: NavbarService,private router: Router, private activatedRoute: ActivatedRoute ) {
    this.visible = true; // set toolbar visible to false
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              //window.requestAnimationFrame(smoothscroll);
              window.scrollTo(2, currentScroll - (currentScroll / 1));
          }
      })();
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
      this.showNavigation(event['footer']); // show the toolbar?
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


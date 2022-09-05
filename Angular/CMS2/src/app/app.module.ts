import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/
/*import { CarouselModule } from 'ngx-owl-carousel-o';*/
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MEComponent } from './me/me.component';
import { EEComponent } from './ee/ee.component';
import { CEComponent } from './ce/ce.component';
import { TPComponent } from './tp/tp.component';
import { CampSelComponent } from './camp-sel/camp-sel.component';
import { TopRecComponent } from './top-rec/top-rec.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { JoinNowComponent } from './join-now/join-now.component';
import { IntroComponent } from './intro/intro.component';
import { FacultySignUpComponent } from './faculty-sign-up/faculty-sign-up.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FacultypanelComponent } from './facultypanel/facultypanel.component';
import { StudentpanelComponent } from './studentpanel/studentpanel.component';
import { UserComponent } from './user/user.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AstudentsComponent } from './astudents/astudents.component';
import { AfacultiesComponent } from './afaculties/afaculties.component';
import { AstaffComponent } from './astaff/astaff.component';
import { AcourseComponent } from './acourse/acourse.component';
import { AattendenceComponent } from './aattendence/aattendence.component';
import { AmarksheetComponent } from './amarksheet/amarksheet.component';
import { AnotificationComponent } from './anotification/anotification.component';
import { CestudentsComponent } from './cestudents/cestudents.component';
import { EestudentsComponent } from './eestudents/eestudents.component';
import { MestudentsComponent } from './mestudents/mestudents.component';
import { MefacultiesComponent } from './mefaculties/mefaculties.component';
import { EefacultiesComponent } from './eefaculties/eefaculties.component';
import { CefacultiesComponent } from './cefaculties/cefaculties.component';
import { CemarksheetComponent } from './cemarksheet/cemarksheet.component';
import { EemarksheetComponent } from './eemarksheet/eemarksheet.component';
import { MemarksheetComponent } from './memarksheet/memarksheet.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { MefdashboardComponent } from './mefdashboard/mefdashboard.component';
import { MefstudentsComponent } from './mefstudents/mefstudents.component';
import { MefmarksheetComponent } from './mefmarksheet/mefmarksheet.component';
import { MefnoticeComponent } from './mefnotice/mefnotice.component';
import { EefacultypanelComponent } from './eefacultypanel/eefacultypanel.component';
import { EefdashboardComponent } from './eefdashboard/eefdashboard.component';
import { EefmarksheetComponent } from './eefmarksheet/eefmarksheet.component';
import { EefnoticeComponent } from './eefnotice/eefnotice.component';
import { EefstudentsComponent } from './eefstudents/eefstudents.component';
import { CefacultypanelComponent } from './cefacultypanel/cefacultypanel.component';
import { CefdashboardComponent } from './cefdashboard/cefdashboard.component';
import { CefmarksheetComponent } from './cefmarksheet/cefmarksheet.component';
import { CefnoticeComponent } from './cefnotice/cefnotice.component';
import { CefstudentsComponent } from './cefstudents/cefstudents.component';
import { CestudentpanelComponent } from './cestudentpanel/cestudentpanel.component';
import { CesdashboardComponent } from './cesdashboard/cesdashboard.component';
import { CesmarksheetComponent } from './cesmarksheet/cesmarksheet.component';
import { CesnoticeComponent } from './cesnotice/cesnotice.component';
import { CesfeesComponent } from './cesfees/cesfees.component';
import { EestudentpanelComponent } from './eestudentpanel/eestudentpanel.component';
import { EesdashboardComponent } from './eesdashboard/eesdashboard.component';
import { EesmarksheetComponent } from './eesmarksheet/eesmarksheet.component';
import { EesnoticeComponent } from './eesnotice/eesnotice.component';
import { EesfeesComponent } from './eesfees/eesfees.component';
import { MesdashboardComponent } from './mesdashboard/mesdashboard.component';
import { MesmarksheetComponent } from './mesmarksheet/mesmarksheet.component';
import { MesnoticeComponent } from './mesnotice/mesnotice.component';
import { MesfeesComponent } from './mesfees/mesfees.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
  
    HeaderComponent,
    FooterComponent,
  
    MiddleComponent,
    NavigationComponent,
    AboutComponent,
  
    CoursesComponent,
    TeamComponent,
    TestimonialComponent,
    MEComponent,
    EEComponent,
    CEComponent,
    TPComponent,
    CampSelComponent,
    TopRecComponent,
    AdminComponent,
    FacultyComponent,
    StudentComponent,
    SignUpComponent,
    ContactComponent,
    JoinNowComponent,
    IntroComponent,
    FacultySignUpComponent,
    StudentSignUpComponent,
    AdminpanelComponent,
    FacultypanelComponent,
    StudentpanelComponent,
    UserComponent,
    AdashboardComponent,
    AstudentsComponent,
    AfacultiesComponent,
    AstaffComponent,
    AcourseComponent,
    AattendenceComponent,
    AmarksheetComponent,
    AnotificationComponent,
    CestudentsComponent,
    EestudentsComponent,
    MestudentsComponent,
    MefacultiesComponent,
    EefacultiesComponent,
    CefacultiesComponent,
    CemarksheetComponent,
    EemarksheetComponent,
    MemarksheetComponent,
    MefdashboardComponent,
    MefstudentsComponent,
    MefmarksheetComponent,
    MefnoticeComponent,
    EefacultypanelComponent,
    EefdashboardComponent,
    EefmarksheetComponent,
    EefnoticeComponent,
    EefstudentsComponent,
    CefacultypanelComponent,
    CefdashboardComponent,
    CefmarksheetComponent,
    CefnoticeComponent,
    CefstudentsComponent,
    CestudentpanelComponent,
    CesdashboardComponent,
    CesmarksheetComponent,
    CesnoticeComponent,
    CesfeesComponent,
    EestudentpanelComponent,
    EesdashboardComponent,
    EesmarksheetComponent,
    EesnoticeComponent,
    EesfeesComponent,
    MesdashboardComponent,
    MesmarksheetComponent,
    MesnoticeComponent,
    MesfeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*BrowserAnimationsModule,*/
    /*CarouselModule,*/
    FormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({preserveScrollPosition:false})
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

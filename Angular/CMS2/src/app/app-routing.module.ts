import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AattendenceComponent } from './aattendence/aattendence.component';
import { AboutComponent } from './about/about.component';
import { AcourseComponent } from './acourse/acourse.component';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AfacultiesComponent } from './afaculties/afaculties.component';
import { AmarksheetComponent } from './amarksheet/amarksheet.component';
import { AnotificationComponent } from './anotification/anotification.component';
import { AstaffComponent } from './astaff/astaff.component';
import { AstudentsComponent } from './astudents/astudents.component';
import { CampSelComponent } from './camp-sel/camp-sel.component';
import { CEComponent } from './ce/ce.component';
import { CefacultiesComponent } from './cefaculties/cefaculties.component';
import { CefacultypanelComponent } from './cefacultypanel/cefacultypanel.component';
import { CefdashboardComponent } from './cefdashboard/cefdashboard.component';
import { CefmarksheetComponent } from './cefmarksheet/cefmarksheet.component';
import { CefnoticeComponent } from './cefnotice/cefnotice.component';
import { CefstudentsComponent } from './cefstudents/cefstudents.component';
import { CesdashboardComponent } from './cesdashboard/cesdashboard.component';
import { CesfeesComponent } from './cesfees/cesfees.component';
import { CesmarksheetComponent } from './cesmarksheet/cesmarksheet.component';
import { CesnoticeComponent } from './cesnotice/cesnotice.component';
import { CestudentpanelComponent } from './cestudentpanel/cestudentpanel.component';
import { CestudentsComponent } from './cestudents/cestudents.component';
import { ContactComponent } from './contact/contact.component';
import { EEComponent } from './ee/ee.component';
import { EefacultiesComponent } from './eefaculties/eefaculties.component';
import { EefacultypanelComponent } from './eefacultypanel/eefacultypanel.component';
import { EefdashboardComponent } from './eefdashboard/eefdashboard.component';
import { EefmarksheetComponent } from './eefmarksheet/eefmarksheet.component';
import { EefnoticeComponent } from './eefnotice/eefnotice.component';
import { EefstudentsComponent } from './eefstudents/eefstudents.component';
import { EesdashboardComponent } from './eesdashboard/eesdashboard.component';
import { EesfeesComponent } from './eesfees/eesfees.component';
import { EesmarksheetComponent } from './eesmarksheet/eesmarksheet.component';
import { EesnoticeComponent } from './eesnotice/eesnotice.component';
import { EestudentpanelComponent } from './eestudentpanel/eestudentpanel.component';
import { EestudentsComponent } from './eestudents/eestudents.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultypanelComponent } from './facultypanel/facultypanel.component';
import { HomeComponent } from './home/home.component';
import { MEComponent } from './me/me.component';
import { MefacultiesComponent } from './mefaculties/mefaculties.component';
import { MefdashboardComponent } from './mefdashboard/mefdashboard.component';
import { MefmarksheetComponent } from './mefmarksheet/mefmarksheet.component';
import { MefnoticeComponent } from './mefnotice/mefnotice.component';
import { MefstudentsComponent } from './mefstudents/mefstudents.component';
import { MesdashboardComponent } from './mesdashboard/mesdashboard.component';
import { MesfeesComponent } from './mesfees/mesfees.component';
import { MesmarksheetComponent } from './mesmarksheet/mesmarksheet.component';
import { MesnoticeComponent } from './mesnotice/mesnotice.component';
import { MestudentsComponent } from './mestudents/mestudents.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentSignUpComponent } from './student-sign-up/student-sign-up.component';
import { StudentComponent } from './student/student.component';
import { StudentpanelComponent } from './studentpanel/studentpanel.component';
import { TopRecComponent } from './top-rec/top-rec.component';
import { TPComponent } from './tp/tp.component';


const routes: Routes = [
  {path:'home', component : HomeComponent},
  {path:'about', component : AboutComponent},
  {path:'sign-up', component : SignUpComponent},
  {path:'contact', component : ContactComponent},
  {path:'me', component : MEComponent},
  {path:'ee', component : EEComponent},
  {path:'ce', component : CEComponent},
  {path:'tp', component : TPComponent},
  {path:'camp-sel', component : CampSelComponent},
  {path:'top-rec', component : TopRecComponent},
  {path:'admin', component : AdminComponent,data: { title:'', navigation: true,footer: true}},
  {path:'faculty', component : FacultyComponent,data: { title:'', navigation: true,footer: true}},
  {path:'student', component : StudentComponent,data: { title:'', navigation: true,footer: true}},
  {path:'student-sign-up', component : StudentSignUpComponent},
  {path:'adminpanel', component : AdminpanelComponent,data: { title:'adminpanel', navigation: false,footer: false}},
  {path:'facultypanel', component : FacultypanelComponent,data: { title:'facultypanel', navigation: false,footer: false}},
  {path:'studentpanel', component : StudentpanelComponent,data: { title:'studentpanel', navigation: false,footer: false}},
  {path:'aattendence', component : AattendenceComponent,data: { title:'aattendence', navigation: false,footer: false}},
  {path:'acourse', component : AcourseComponent,data: { title:'acourse', navigation: false,footer: false}},
  {path:'adashboard', component : AdashboardComponent,data: { title:'adashboard', navigation: false,footer: false}},
  {path:'afaculties', component : AfacultiesComponent,data: { title:'afaculties', navigation: false,footer: false}},
  {path:'amarksheet', component : AmarksheetComponent,data: { title:'amarksheet', navigation: false,footer: false}},
  {path:'anotification', component : AnotificationComponent,data: { title:'anotification', navigation: false,footer: false}},
  {path:'astaff', component : AstaffComponent,data: { title:'astaff', navigation: false,footer: false}},
  {path:'astudents', component : AstudentsComponent,data: { title:'astudents', navigation: false,footer: false}},
  {path:'mestudents', component : MestudentsComponent,data: { title:'mestudents', navigation: false,footer: false}},
  {path:'eestudents', component : EestudentsComponent,data: { title:'eestudents', navigation: false,footer: false}},
  {path:'cestudents', component : CestudentsComponent,data: { title:'cestudents', navigation: false,footer: false}},
  {path:'mefaculties', component : MefacultiesComponent,data: { title:'mefaculties', navigation: false,footer: false}},
  {path:'eefaculties', component : EefacultiesComponent,data: { title:'eefaculties', navigation: false,footer: false}},
  {path:'cefaculties', component : CefacultiesComponent,data: { title:'cefaculties', navigation: false,footer: false}},

  {path:'mefdashboard', component : MefdashboardComponent,data: { title:'mefdashboard', navigation: false,footer: false}},
  {path:'mefmarksheet', component : MefmarksheetComponent,data: { title:'mefmarksheet', navigation: false,footer: false}},
  {path:'mefnotice', component : MefnoticeComponent,data: { title:'mefnotice', navigation: false,footer: false}},
  {path:'mefstudents', component : MefstudentsComponent,data: { title:'mefstudents', navigation: false,footer: false}},

  {path:'eefacultypanel', component : EefacultypanelComponent,data: { title:'eefacultypanel', navigation: false,footer: false}},
  {path:'eefdashboard', component : EefdashboardComponent,data: { title:'eefdashboard', navigation: false,footer: false}},
  {path:'eefmarksheet', component : EefmarksheetComponent,data: { title:'eefmarksheet', navigation: false,footer: false}},
  {path:'eefnotice', component : EefnoticeComponent,data: { title:'eefnotice', navigation: false,footer: false}},
  {path:'eefstudents', component : EefstudentsComponent,data: { title:'eefstudents', navigation: false,footer: false}},

  {path:'cefacultypanel', component : CefacultypanelComponent,data: { title:'cefacultypanel', navigation: false,footer: false}},
  {path:'cefdashboard', component : CefdashboardComponent,data: { title:'cefdashboard', navigation: false,footer: false}},
  {path:'cefmarksheet', component : CefmarksheetComponent,data: { title:'cefmarksheet', navigation: false,footer: false}},
  {path:'cefnotice', component : CefnoticeComponent,data: { title:'cefnotice', navigation: false,footer: false}},
  {path:'cefstudents', component : CefstudentsComponent,data: { title:'cefstudents', navigation: false,footer: false}},

  {path:'mesdashboard', component : MesdashboardComponent,data: { title:'mesdashboard', navigation: false,footer: false}},
  {path:'mesmarksheet', component : MesmarksheetComponent,data: { title:'mesmarksheet', navigation: false,footer: false}},
  {path:'mesnotice', component : MesnoticeComponent,data: { title:'mesnotice', navigation: false,footer: false}},
  {path:'mesfees', component : MesfeesComponent,data: { title:'mesfees', navigation: false,footer: false}},

  {path:'eestudentpanel', component : EestudentpanelComponent,data: { title:'eestudentpanel', navigation: false,footer: false}},
  {path:'eesdashboard', component : EesdashboardComponent,data: { title:'eesdashboard', navigation: false,footer: false}},
  {path:'eesmarksheet', component : EesmarksheetComponent,data: { title:'eesmarksheet', navigation: false,footer: false}},
  {path:'eesnotice', component : EesnoticeComponent,data: { title:'eesnotice', navigation: false,footer: false}},
  {path:'eesfees', component : EesfeesComponent,data: { title:'eesfees', navigation: false,footer: false}},

  {path:'cestudentpanel', component : CestudentpanelComponent,data: { title:'cestudentpanel', navigation: false,footer: false}},
  {path:'cesdashboard', component : CesdashboardComponent,data: { title:'cesdashboard', navigation: false,footer: false}},
  {path:'cesmarksheet', component : CesmarksheetComponent,data: { title:'cesmarksheet', navigation: false,footer: false}},
  {path:'cesnotice', component : CesnoticeComponent,data: { title:'cesnotice', navigation: false,footer: false}},
  {path:'cesfees', component : CesfeesComponent,data: { title:'cesfees', navigation: false,footer: false}},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallstudentComponent } from './viewallstudent/viewallstudent.component';
import { ViewallfacultyComponent } from './viewallfaculty/viewallfaculty.component';
import { AddfacultyComponent } from './addfaculty/addfaculty.component';
import { RouterModule } from '@angular/router';

const myroutes=[


  {path:"",component:AddstudentComponent},
  {path:"view",component:ViewallstudentComponent},
  {path:"add",component:AddfacultyComponent},
  {path:"viewfac",component:ViewallfacultyComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    NavbarComponent,
    ViewallstudentComponent,
    ViewallfacultyComponent,
    AddfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

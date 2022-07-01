import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SubhomeComponent } from './components/subhome/subhome.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreatehospitalComponent } from './components/createhospital/createhospital.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { RudhospitalComponent } from './components/rudhospital/rudhospital.component';
import { DepartmentComponent } from './components/department/department.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreatedepartmentComponent } from './components/createdepartment/createdepartment.component';
import { RUDdepartmentComponent } from './components/ruddepartment/ruddepartment.component';
import { UpdatefloorComponent } from './components/updatefloor/updatefloor.component';
import { RUDdoctorComponent } from './components/ruddoctor/ruddoctor.component';
import { CreatedoctorComponent } from './components/createdoctor/createdoctor.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    SubhomeComponent,
    HospitalComponent,
    CreatehospitalComponent,
    RudhospitalComponent,
    DepartmentComponent,
    UpdateDialogComponent,
    CreatedepartmentComponent,
    RUDdepartmentComponent,
    UpdatefloorComponent,
    RUDdoctorComponent,
    CreatedoctorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule
  
    
    
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedepartmentComponent } from './components/createdepartment/createdepartment.component';
import { CreatehospitalComponent } from './components/createhospital/createhospital.component';
import { DepartmentComponent } from './components/department/department.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { LoginComponent } from './components/login/login.component';
import { RUDdepartmentComponent } from './components/ruddepartment/ruddepartment.component';
import { RUDdoctorComponent } from './components/ruddoctor/ruddoctor.component';
import { RudhospitalComponent } from './components/rudhospital/rudhospital.component';
import { SignupComponent } from './components/signup/signup.component';
import { SubhomeComponent } from './components/subhome/subhome.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"subhome",component:SubhomeComponent},
  {path:"hospital",component:HospitalComponent},
  {path:"createhospital",component:CreatehospitalComponent},
  {path:"RUDhospital",component:RudhospitalComponent},
  {path:"department",component:DepartmentComponent},
  {path:"createdepartment",component:CreatedepartmentComponent},
  {path:"RUDdepartment",component:RUDdepartmentComponent},
  {path:"RUDdoctor",component:RUDdoctorComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

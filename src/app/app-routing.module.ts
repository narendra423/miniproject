import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedepartmentComponent } from './components/createdepartment/createdepartment.component';
import { CreatedoctorComponent } from './components/createdoctor/createdoctor.component';
import { CreatehospitalComponent } from './components/createhospital/createhospital.component';
import { CreatepatientComponent } from './components/createpatient/createpatient.component';
import { DepartmentComponent } from './components/department/department.component';
import { DisplaydoctorComponent } from './components/displaydoctor/displaydoctor.component';
import { EditHospitalComponent } from './components/edit-hospital/edit-hospital.component';
import { EditdepartmentComponent } from './components/editdepartment/editdepartment.component';
import { EditdoctorComponent } from './components/editdoctor/editdoctor.component';
import { EditpatientComponent } from './components/editpatient/editpatient.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { LoginComponent } from './components/login/login.component';
import { PatientslistComponent } from './components/patientslist/patientslist.component';
import { RUDdepartmentComponent } from './components/ruddepartment/ruddepartment.component';
import { RUDdoctorComponent } from './components/ruddoctor/ruddoctor.component';
import { RudhospitalComponent } from './components/rudhospital/rudhospital.component';
import { RUDpatientComponent } from './components/rudpatient/rudpatient.component';
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
  {path:"RUDdoctor",component:RUDdoctorComponent},
  {path:"createdoctor",component:CreatedoctorComponent},
  {path:"RUDpatient",component:RUDpatientComponent},
  {path:"createpatient",component:CreatepatientComponent},
  {path:"patientslist",component:PatientslistComponent},
  {path:"displaydoctor",component:DisplaydoctorComponent},
  {path:"edithospital/:id",component:EditHospitalComponent},
  {path:"editdepartment/:id",component:EditdepartmentComponent},
  {path:"editdoctor/:id",component:EditdoctorComponent},
  {path:"editpatient/:id",component:EditpatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

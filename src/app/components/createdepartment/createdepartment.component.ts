import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css']
})
export class CreatedepartmentComponent implements OnInit {

  

  constructor(private departmentservice:DepartmentService,private router:Router) { }
  createDepartmentForm:any;
  floors:any;
  newdepartment:any;
  hospitalIdTemp:any;
  depts:any;
 


  ngOnInit(): void {
 
  this.floors=["Ground Floor","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th"];
  this.depts=['Orthopedics','Gynecology','Dermatology','Pediatrics','Radiology','Ophthamology','Cardiology','Dentology','Pathology','Emergency']
  
  this.createDepartmentForm=new FormGroup({
    deptName:new FormControl('',[Validators.required]),
    floor:new FormControl('',[Validators.required])
    // hospitalId:new FormControl('',Validators.required)
  }) }



  get f(){
    return this.createDepartmentForm.controls}

  onSubmit(){
    this.hospitalIdTemp=localStorage.getItem('hId');
    this.hospitalIdTemp=JSON.parse(this.hospitalIdTemp || '{}');
    //console.log(this.hospitalIdTemp);
    this.newdepartment={
      deptName:this.createDepartmentForm.value.deptName,
        floor:this.createDepartmentForm.value.floor,
        hospital:{
            hospitalId:this.hospitalIdTemp
        }

    }

    //console.log(this.newdepartment);
    if(this.createDepartmentForm.valid){
      this.departmentservice.addDepartment(this.newdepartment).subscribe((result)=>
    {
      this.departmentservice.getallDepartments().subscribe((data)=>{})
      Swal.fire("Department added","","success");
      //this.router.navigate(['RUDdepartment'])
      this.createDepartmentForm.reset();
    })
    }
    else{
      alert("Some fields are empty plz check once");
    }
    
  }
  

}





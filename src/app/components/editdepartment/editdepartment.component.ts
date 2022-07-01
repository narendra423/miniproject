import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {
  // createDepartmentForm:any;
  createDepartmentForm:any;
  newdepartment:any;
  hospitalIdTemp:any;
  //departmentId!:any;
  
  
  floors=["Ground Floor","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th"];
  depts=['Orthopedics','Gynecology','Dermatology','Pediatrics','Radiology','Ophthamology','Cardiology','Dentology','Pathology','Emergency']

 
  
  constructor(private router:ActivatedRoute,private deptservice:DepartmentService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.createDepartmentForm=new FormGroup({
      deptName:new FormControl('',[Validators.required]),
      floor:new FormControl('',[Validators.required]),
      hospitalId:new FormControl('',Validators.required)
    })

    this.hospitalIdTemp=localStorage.getItem("hId")
    this.hospitalIdTemp=JSON.parse(this.hospitalIdTemp)
    //console.log(this.hospitalIdTemp)
   this.deptservice.getDepartmentById(this.router.snapshot.params['id']).subscribe((result:any)=>{
    console.log(result);
    this.createDepartmentForm=new FormGroup({
     deptName:new FormControl(result['deptName']),
     floor:new FormControl(result['floor']),
     deptId:new FormControl(result['deptId']),
     hospital:new FormControl({
      hospitalId: this.hospitalIdTemp
     })
    })
   
   })
   
  //console.log(this.newdepartment.value)
  
    
  }
  get f(){  
    return this.createDepartmentForm.controls} 

  onSubmit(){
    console.log(this.createDepartmentForm.value);
    this.deptservice.addDepartment(this.createDepartmentForm.value).subscribe((data)=>{
      console.log(data);
      this.toast.success({detail:"success",summary:"Successfully updated",duration:5000})
    },
    (error)=>{
      console.log(error)
    }
    )
  }
     
  }


  



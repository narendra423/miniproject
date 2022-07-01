import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService,private router:ActivatedRoute,private toast:NgToastService) { }
  Genders=["Male","Female","Others"];
 specializations=['Orthopedist','Gynecologist','Dermatologist','Pediatricist','Radiologist','Ophthalmologist','Cardiologist','Dentist','Pathologist','Emergency duty']
 createDoctorForm:any;
 DepartmentIdTemp:any;
 hospitalIdTemp:any;
  ngOnInit(): void {
    this.createDoctorForm= new FormGroup({
      doctorName:new FormControl('',[Validators.required]),
      doctorGender:new FormControl('',[Validators.required]),
      doctorAge:new FormControl('',[Validators.required]),
      doctorMobileNumber:new FormControl('',[Validators.required]),
      doctorSpecialization:new FormControl('',[Validators.required]),
      deptId:new FormControl('',[Validators.required])
    })
    this.DepartmentIdTemp=localStorage.getItem("departmentId")
    this.DepartmentIdTemp=JSON.parse(this.DepartmentIdTemp)
    //---------------
    this.hospitalIdTemp=localStorage.getItem("hId")
    this.hospitalIdTemp=JSON.parse(this.hospitalIdTemp)
    this.doctorService.getDoctorById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      //console.log(result)
      this.createDoctorForm=new FormGroup({
        doctorId:new FormControl(result['doctorId']),
        doctorName:new FormControl(result['doctorName']),
        doctorGender:new FormControl(result['doctorGender']),
        doctorAge:new FormControl(result['doctorAge']),
        doctorMobileNumber:new FormControl(result['doctorMobileNumber']),
        doctorSpecialization:new FormControl(result['doctorSpecialization']),
        department:new FormControl({
          deptId:this.DepartmentIdTemp,
          hospital:{
            hospitalId:this.hospitalIdTemp
          }
        })
      })
  
    })


  }

  get f(){
    return this.createDoctorForm.controls
  }

  onSubmit(){
    console.log(this.createDoctorForm.value)
    this.doctorService.addDoctor(this.createDoctorForm.value).subscribe((data)=>{
      console.log(data)
      this.toast.success({detail:"Success",summary:"Succeccfully updated",duration:5000})
    },
    (error)=>{
      alert("Something went wrong plz check")
    }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { DoctorService } from 'src/app/service/doctor.service';
import { PatientService } from 'src/app/service/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {
  createPatientForm:any;
  Genders=["Male","Female","Others"];
  BloodGroups=["A+ve","A-ve","B+ve","B-ve","O+ve","O-ve","AB+ve","AB-ve"];
  constructor(private patientservice:PatientService,private doctorservice:DoctorService,private toast:NgToastService) { }

  doctorIdForJK:any;
  patientIdForJT:any;
  mobileNumber:any;

  ngOnInit(): void {
    this.createPatientForm=new FormGroup({
      patientName:new FormControl('',[Validators.required]),
      patientGender:new FormControl('',[Validators.required]),
      patientAge:new FormControl('',[Validators.required]),
      patientBloodGroup:new FormControl('',[Validators.required]),
      patientMobileNumber:new FormControl('',[Validators.required]),
      patientLocation:new FormControl('',[Validators.required]),
      admittedDate:new FormControl('',[Validators.required])
    })
  }
  get f(){
    return this.createPatientForm.controls
  }

  onSubmit(){
    if(this.createPatientForm.valid){
      this.patientservice.addPatient(this.createPatientForm.value).subscribe((result)=>
    {
      this.mobileNumber=this.createPatientForm.value.patientMobileNumber;
      Swal.fire("Patient added","","success");
      this.createPatientForm.reset();
    },
    (error)=>{
      console.log("Something went wrong please enter a valid details");
    })
    }
    else{
      alert("Some fields are empty plz check once");
    }
  }

  assign(){
    let doctorIdForJT1=localStorage.getItem('doctorIdForJT');
      let doctorIdForJT=JSON.parse(doctorIdForJT1 ||'{}')
      //console.log("aaasfashashagshdg");
      //console.log("----for patient admission-----")
     // console.log(doctorIdForJT);
     // console.log(this.mobileNumber);
      this.patientservice.getCurrentPatientIdByMobile(this.mobileNumber).subscribe((data)=>{
        this.patientIdForJT= data;
        console.log(this.patientIdForJT);
        this.doctorservice.assignPatientToDoctor(this.patientIdForJT, doctorIdForJT,"").subscribe((data11111)=>{
          this.toast.success({detail:"success",summary:"successfully assigned to doctor",duration:5000})
        },(error)=>{
          console.log(error);
          this.toast.error({detail:"failure",summary:"not assigned to doctor",duration:5000})
        });
      })
      
      
  }

  closeAlert(){
    
  }

}

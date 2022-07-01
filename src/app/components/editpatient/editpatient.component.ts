import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {

  constructor(private patientService:PatientService,private router:ActivatedRoute,private toast:NgToastService) { }
  createPatientForm:any;
  Genders=["Male","Female","Others"];
  BloodGroups=["A+ve","A-ve","B+ve","B-ve","O+ve","O-ve","AB+ve","AB-ve"];
  doctorIdTemp:any;

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
    this.doctorIdTemp=localStorage.getItem('doctorId');
    this.doctorIdTemp=JSON.parse(this.doctorIdTemp);

    this.patientService.getPateintById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      // console.log("--------------")
      // console.log(this.doctorIdTemp)
      this.createPatientForm=new FormGroup({
        patientId:new FormControl(result['patientId']),
        patientName:new FormControl(result['patientName']),
        patientGender:new FormControl(result['patientGender']),
        patientAge:new FormControl(result['patientAge']),
        patientBloodGroup:new FormControl(result['patientBloodGroup']),
        patientMobileNumber:new FormControl(result['patientMobileNumber']),
        patientLocation:new FormControl(result['patientLocation']),
        admittedDate:new FormControl(result['admittedDate']),
        doctors:new FormControl({
          doctorId:this.doctorIdTemp
        })

      })
      
    })
    
    
  }
  get f(){
    return this.createPatientForm.controls
  }

  onSubmit(){
    console.log(this.createPatientForm.value);
    const newPatient = {
      admittedDate: this.createPatientForm.value.admittedDate,
      doctors: [
        {
          doctorId: this.doctorIdTemp
        }
      ],
      patientAge: this.createPatientForm.value.patientAge,
      patientBloodGroup: this.createPatientForm.value.patientBloodGroup,
      patientGender: this.createPatientForm.value.patientGender,
      patientId: this.createPatientForm.value.patientId,
      patientLocation: this.createPatientForm.value.patientLocation,
      patientMobileNumber: this.createPatientForm.value.patientMobileNumber,
      patientName: this.createPatientForm.value.patientName
    }
    
    this.patientService.addPatient(newPatient).subscribe((data)=>{
      console.log(data);
     this.toast.success({detail:"success",summary:"successfully updated",duration:5000})
    },
    (error)=>{
      this.toast.error({detail:"failure",summary:"Something went wrong",duration:5000})
    }
    
    )
  }


}

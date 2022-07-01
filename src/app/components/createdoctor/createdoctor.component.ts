import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/service/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {

  constructor(private doctorservice:DoctorService) { }
  createDoctorForm:any;
  newDoctor:any;
  deptFKfinal:any;

  ngOnInit(): void {
    
    this.createDoctorForm= new FormGroup({
      doctorName:new FormControl('',[Validators.required]),
      doctorGender:new FormControl('',[Validators.required]),
      doctorAge:new FormControl('',[Validators.required]),
      doctorMobileNumber:new FormControl('',[Validators.required]),
      doctorSpecialization:new FormControl('',[Validators.required])
    })
 }
 Genders=["Male","Female","Others"];
 specializations=['Orthopedist','Gynecologist','Dermatologist','Pediatricist','Radiologist','Ophthalmologist','Cardiologist','Dentist','Pathologist','Emergency duty']

get f(){
  return this.createDoctorForm.controls
}
onSubmit(){
  this.deptFKfinal=localStorage.getItem('deptFK')
  this.deptFKfinal=JSON.parse(this.deptFKfinal || '{}')

  this.newDoctor={
    doctorName:this.createDoctorForm.value.doctorName,
    doctorGender:this.createDoctorForm.value.doctorGender,
    doctorAge:this.createDoctorForm.value.doctorAge,
    doctorMobileNumber:this.createDoctorForm.value.doctorMobileNumber,
    doctorSpecialization:this.createDoctorForm.value.doctorSpecialization,
    department:{
      deptId:this.deptFKfinal
    }
  }
  if(this.createDoctorForm.valid){
    this.doctorservice.addDoctor(this.newDoctor).subscribe((result)=>
  {
    console.log(this.newDoctor)
    Swal.fire("Doctor added","","success");
    this.createDoctorForm.reset();
  })
  }
  else{
    alert("Some fields are empty plz check once");
  }





  }







}



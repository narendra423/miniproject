import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {

  constructor() { }
  createDoctorForm:any;

  ngOnInit(): void {
    this.createDoctorForm= new FormGroup({
      doctorName:new FormControl('',[Validators.required]),
      doctorGender:new FormControl('',[Validators.required]),
      doctorAge:new FormControl('',[Validators.required]),
      doctorMobileNumber:new FormControl('',[Validators.required]),
      doctorSpecialization:new FormControl('',[Validators.required])
    })
 }

get f(){
  return this.createDoctorForm.controls;
}
onSubmit(){
      
}

}

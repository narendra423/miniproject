import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HospitalService } from 'src/app/service/hospital.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createhospital',
  templateUrl: './createhospital.component.html',
  styleUrls: ['./createhospital.component.css']
})
export class CreatehospitalComponent implements OnInit {

  constructor(private hospitalservice:HospitalService) { }

  ngOnInit(): void {
  }

  htypes=["Public","Private","Non-profit"];
  createHopspitalForm=new FormGroup({
    hospitalName:new FormControl('',[Validators.required]),
    hospitalType:new FormControl('',[Validators.required]),
    hospitalLocation:new FormControl('',[Validators.required]),
    hospitalCode:new FormControl('',[Validators.required])
  })

  

  get hospitalName(){
    return this.createHopspitalForm.get('hospitalName');
  }
  get hospitalType(){
    return this.createHopspitalForm.get('hospitalType');
  }
  get hospitalLocation(){
    return this.createHopspitalForm.get('hospitalLocation');
  }
  get hospitalCode(){
    return this.createHopspitalForm.get('hospitalCode');
  }

  onSubmit(){
    if(this.createHopspitalForm.valid){
      this.hospitalservice.addHospital(this.createHopspitalForm.value).subscribe(
        (result)=>{
          Swal.fire("Hospital added","","success")
          ///console.log(result)
          this.createHopspitalForm.reset();
          
        },
        (error)=>{
          console.log("Something went wrong please enter a valid details");
          alert('Duplicate Hospital Code try with new one');
        });
    }
    else{
      alert("some fields are empty please check once");
    }
      
    
  }

}

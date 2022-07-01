import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HospitalService } from 'src/app/service/hospital.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrls: ['./edit-hospital.component.css']
})
export class EditHospitalComponent implements OnInit {
  htypes=["Public","Private","Non-profit"];
  hospital:any;
  createHopspitalForm=new FormGroup({
    hospitalName:new FormControl('',[Validators.required]),
    hospitalType:new FormControl('',[Validators.required]),
    hospitalLocation:new FormControl('',[Validators.required]),
    hospitalCode:new FormControl('',[Validators.required])
  })

  constructor(private router:ActivatedRoute,private hospitalService:HospitalService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.hospitalService.getHospitalById(this.router.snapshot.params['id']).subscribe((result)=>{
      //console.log(result.hospitalId);
      this.createHopspitalForm=new FormGroup({
        hospitalName:new FormControl(result['hospitalName']),
        hospitalType:new FormControl(result['hospitalType']),
        hospitalLocation:new FormControl(result['hospitalLocation']),
        hospitalCode:new FormControl(result['hospitalCode']),
        hospitalId: new FormControl(result['hospitalId']),
        //departments:new FormControl([])
      })
    })
  }

  // updateHospital(){
    
  // }

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
    console.log(this.createHopspitalForm.value)
     this.hospitalService.addHospital(this.createHopspitalForm.value).subscribe((data)=>{
      console.log(data,"Data Updated successfully");
      this.toast.success({detail:"Success Message",summary:"Data Updated Successfully",duration:5000})
     },
     (error)=>{
      console.log(error);
      this.toast.error({detail:"Failure message",summary:"Data Not Updated",duration:5000})
     })
  }

}

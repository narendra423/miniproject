import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-rudpatient',
  templateUrl: './rudpatient.component.html',
  styleUrls: ['./rudpatient.component.css']
})
export class RUDpatientComponent implements OnInit {

  constructor(private doctorServices:DoctorService,private pateintservice:PatientService) { }
  doctor:any;
  patients:any;
  finalData:any;
  hidddd:any;

  public popoverTitle:string="Delete Confirmation";
  public popovermessage:string='Do you really want to delete';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  ngOnInit(): void {
   // let data=localStorage.getItem('patientstobedisplayed');
    //console.log(data)
    //this.doctor=JSON.parse(data || "{}")
     //----------------------
     let hospitalIddd=localStorage.getItem('hoSpitalId')
     let finalHospitalId=JSON.parse(hospitalIddd || '{}');
     this.hidddd=finalHospitalId;
    ///----------------------final checking-------------
    let doctorIdd=localStorage.getItem('doctorId')
      let finalDoctorId=JSON.parse(doctorIdd || '{}');
      this.doctorServices.getDoctorById(finalDoctorId).subscribe((data)=>{
       // console.log(data.departments);
        this.doctor = data;
        this.patients=this.doctor.doctorPatients;
        localStorage.setItem('doctorIdForJT',this.doctor.doctorId);
        console.log(this.doctor.patients);
      })

    

    // this.doctorServices.getPatientsByDoctor(this.doctor.doctorId).subscribe((data11)=>{
    //   //console.log(data11)
    //   this.finalData=data11;
    //   //console.log(this.finalData)
    // },(error)=>{
    //   console.log(error)
    // })


    //console.log(data)
    
  }

  deleteDepartmentById(id:number){
    this.pateintservice.deletepatientById(id).subscribe((data)=>{
      this.patients=data;
    },
    
    (error)=>{
      console.log(error)
      alert("Something went wrong")
    })
    window.location.reload();
  }
}

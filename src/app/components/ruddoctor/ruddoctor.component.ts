import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-ruddoctor',
  templateUrl: './ruddoctor.component.html',
  styleUrls: ['./ruddoctor.component.css']
})
export class RUDdoctorComponent implements OnInit {
  

  constructor(private router:Router, private doctorservice:DoctorService,private deptService:DepartmentService) { }
  doctors:any;
  department:any;
  finaldeptFK:any;
  hidddd:any;

  public popoverTitle:string="Delete Confirmation";
  public popovermessage:string='Do you really want to delete';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  ngOnInit(): void {
    
    // this.doctorservice.getAllDoctors().subscribe((data)=>{//console.log(data)
    // this.doctors=data;
    // })
    //  let data2=localStorage.getItem('DoctorsTobeDisplayed');
    //  this.department=JSON.parse(data2 || '{}')
    //  this.doctors=this.department.doctors;
    //  console.log(this.doctors);
     //----------------------
    let hospitalIddd=localStorage.getItem('hoSpitalId')
      let finalHospitalId=JSON.parse(hospitalIddd || '{}');
      this.hidddd=finalHospitalId;
    //---------------Final checking------------------
    let departmentIdd=localStorage.getItem('departmentId')
      let finalDepartmentId=JSON.parse(departmentIdd || '{}');
      //console.log(finalDoctorId)
      this.deptService.getDepartmentById(finalDepartmentId).subscribe((data)=>{
        this.department = data;
        this.doctors=this.department.doctors;
        console.log(this.doctors)
      })
//----------------------

  }

  passingDoctorId(j:any){
    localStorage.setItem('deptFK',JSON.stringify(j));
  }

  deleteDoctor(d:number){
    this.doctorservice.deleteDoctor(d).subscribe((data)=>{
      this.doctors=data;
    },(error)=>{
      console.log(error)
    })
    window.location.reload();
  }

  showpatients(i:any){
   localStorage.setItem('doctorId',JSON.stringify(this.doctors[i].doctorId))
   localStorage.setItem('patientstobedisplayed',JSON.stringify(this.doctors[i]))
  
  //console.log(JSON.parse(data || '{}'))

  this.router.navigate(['RUDpatient'])
  }




}

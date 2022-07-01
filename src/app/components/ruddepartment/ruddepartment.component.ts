import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Department } from 'src/app/model/department';
import { Hospital } from 'src/app/model/hospital';
import { DepartmentService } from 'src/app/service/department.service';
import { HospitalService } from 'src/app/service/hospital.service';
import { UpdatefloorComponent } from '../updatefloor/updatefloor.component';

@Component({
  selector: 'app-ruddepartment',
  templateUrl: './ruddepartment.component.html',
  styleUrls: ['./ruddepartment.component.css']
})
export class RUDdepartmentComponent implements OnInit {
  hospitals:any;
  displayDepartments:any;
  hospital:any;
  departments:any;
  floor:any;
  department:any;
  doctor:any;
  hospitalTemp:any;
  departmentsTemp:any;
  showresults = false;
  hidddd!:number;

  public popoverTitle:string="Delete Confirmation";
  public popovermessage:string='Do you really want to delete';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  
  constructor(private hospitalservice:HospitalService ,private router: Router,private dialog :MatDialog,private deptservice:DepartmentService,private hospitalService:HospitalService) { }


  

  updateDeptFloor(deptId:number){
    const dialogRef = this.dialog.open(UpdatefloorComponent, {
      width: '350px',
      data: {floor: this.floor},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      console.log(deptId);
      this.deptservice.updateDepartmentFloor(result,deptId,this.hospital).subscribe()


      let hospitalIddd=localStorage.getItem('hoSpitalId')
      let finalHospitalId=JSON.parse(hospitalIddd || '{}');
      
      this.hospitalservice.getHospitalById(finalHospitalId).subscribe((data)=>{
        console.log(data.departments)
        //this.departments=data;
        //localStorage.setItem('toBeDesplayedDepts2',JSON.stringify(data.departments))
      })
     // this.ngOnInit()
      this.router.navigate(['RUDdepartment'])
      console.log(result,"abcdefg")
     
      
    });
  }


  ngOnInit(): void {
   // let resp=this.hospitalService.getAllHospitals().subscribe((data)=>this.hospitals=data)
     
        //console.log(element) 
      //this.hospitals=data
      let hospitalIddd=localStorage.getItem('hoSpitalId')
      let finalHospitalId=JSON.parse(hospitalIddd || '{}');

      //----------------------
      this.hidddd=finalHospitalId;
      

      this.hospitalservice.getHospitalById(finalHospitalId).subscribe((data)=>{
       // console.log(data.departments);
        this.hospital = data;
        this.departments=this.hospital.departments;
      })


      // let departmentsTemp=localStorage.getItem('toBeDesplayedDepts2');

      // let parsedDepartmentsTemp=JSON.parse(departmentsTemp || '{}');
      // this.hospital=parsedDepartmentsTemp;
      // this.departments = parsedDepartmentsTemp.departments;



  
      // console.log("before remove")
      // console.log(localStorage.getItem('toBeDesplayedDepts2'),"before removing local stoarage")
      // console.log("aftyer remove")

      // console.log(localStorage.getItem('toBeDesplayedDepts2'),"after removing local stoarage")
      // console.log("checking")
      


  }
  passingHospitalId(j:any){
    localStorage.setItem('hId',JSON.stringify(j));
    console.log(j);
   // this.ngOnInit();
  
}
showDoctors(i:any){
  localStorage.setItem('departmentId',JSON.stringify(this.departments[i].deptId))
  localStorage.setItem('DoctorsTobeDisplayed',JSON.stringify(this.hospital.departments[i]))
  this.router.navigate(['RUDdoctor']);
}

deleteDepartmentById(i:number){
  console.log("department delete working")
  let resp=this.deptservice.deleteDepartment(i);
  resp.subscribe((data)=>this.departments=data
  );
 window.location.reload();
}


}
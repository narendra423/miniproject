import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Department } from 'src/app/model/department';
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
  constructor(private dialog :MatDialog,private deptservice:DepartmentService,private hospitalService:HospitalService) { }


  deleteDepartmentById(i:number){
    console.log("department delete working")
    let resp=this.deptservice.deleteDepartment(i);
    resp.subscribe((data)=>this.departments=data
    );
    
  }

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
      window.location.reload();
    });
  }


  ngOnInit(): void {
   // let resp=this.hospitalService.getAllHospitals().subscribe((data)=>this.hospitals=data)
     
        //console.log(element) 
      //this.hospitals=data

      let data1= localStorage.getItem('toBeDesplayedDepts');
      //console.log(data1);
      
      let hospitalTemp=JSON.parse(data1 || '{}')  
      this.departments=hospitalTemp.departments;   
  }
  passingHospitalId(j:any){
    localStorage.setItem('hId',JSON.stringify(j));

}
showDoctors(i:any){
  localStorage.setItem('DoctorsTobeDisplayed',JSON.stringify(this.departments[i]))
  //let data2=localStorage.getItem('DoctorsTobeDisplayed');
  //console.log(data2)
}


}
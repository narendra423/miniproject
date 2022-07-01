import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';
import { DialogData } from '../rudhospital/rudhospital.component';


@Component({
  selector: 'app-updatefloor',
  templateUrl: './updatefloor.component.html',
  styleUrls: ['./updatefloor.component.css']
})
export class UpdatefloorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatefloorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router:Router,
    private deptservice:DepartmentService) { }

  ngOnInit(): void {
  }
  onNoClick(){
    window.location.reload();
  }
  openDeptList(){
    // this.router.navigate(['RUDdepartment'])
    // this.deptservice.updateDepartmentFloor(result,deptId,this.hospital).subscribe()
  }

}

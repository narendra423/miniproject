import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { Route, Router } from '@angular/router';



export interface DialogData {
  hospitalName:string;
}

@Component({
  selector: 'app-rudhospital',
  templateUrl: './rudhospital.component.html',
  styleUrls: ['./rudhospital.component.css']
})
export class RudhospitalComponent implements OnInit {
  hospitals:any;
  hospital:any;
  location:string="";
  hospitalType: any;
  
  constructor(private hospitalservice:HospitalService,
    private router:Router,
    public dialog:MatDialog) { }

  public deleteHospital(id:number){
   let resp=this.hospitalservice.deleteHospital(id);
   resp.subscribe(
     (data)=>
       this.hospitals=data);
  }

  public findHospitalByLocation(){
    let responce=this.hospitalservice.getHospitalByLocation(this.location);
    responce.subscribe(
      (data)=>this.hospitals=data);
  }

  ngOnInit(): void {
    let resp=this.hospitalservice.getAllHospitals();
    resp.subscribe(
      (data)=>this.hospitals=data);

  }
  refresh(){
    let resp=this.hospitalservice.getAllHospitals();
    resp.subscribe(
      (data)=>this.hospitals=data);
  }

  
    updateHospitalType(hospitalId : number):void {
      const dialogConfig = new MatDialogConfig();

         dialogConfig.disableClose = false;
       dialogConfig.autoFocus = false;
        const dialogRef = this.dialog.open(UpdateDialogComponent, {
          width: '350px',
          data: {hospitalType: this.hospitalType},
        });
    
    
        dialogRef.afterClosed().subscribe((result) => {
          console.log('The dialog was closed');
          console.log(result);
          console.log(hospitalId);
          // this.hospitalName = result;
          this.hospitalservice.updateHospitalById(hospitalId,result,this.hospital).subscribe()
          window.location.reload();
        });
        
      };
    
      // seeDeptList(id:number){
      //   this.hospitalservice.getHospitalById(id).subscribe((data)=>{
      //     this.hospitals=data;
      //   })
      // }

      showdepartments(i:any){
          //this.hospitals
          //console.log(this.hospitals[i])
          //console.log("check")
          console.log(this.hospitals[i]);
          localStorage.setItem('toBeDesplayedDepts',JSON.stringify(this.hospitals[i]))
          this.router.navigate(['RUDdepartment'])
      }

  }
  






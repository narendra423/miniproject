import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/service/hospital.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';



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
  adminsList:any;
  looggedInAdmin:any;
  loggedInAdminCode!:string;


  public popoverTitle:string="Delete Confirmation";
  public popovermessage:string='Do you really want to delete';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  
  constructor(private hospitalservice:HospitalService,private adminservice:AdminService,
    private router:Router,
    public dialog:MatDialog) {}

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
    //----------getting all admin details-----------
    this.adminservice.getAllAdmins().subscribe((data)=>{
      this.adminsList=data;
      console.log(data)
     })

     //---------getting all Hospitals details------------
    let resp=this.hospitalservice.getAllHospitals();
    resp.subscribe(
      (data)=>{this.hospitals=data
      //console.log(data)
      });

      //----------------------

      this.looggedInAdmin = localStorage.getItem('LoggedinAdmin')
      this.looggedInAdmin=JSON.parse(this.looggedInAdmin);
      this.loggedInAdminCode=this.looggedInAdmin.hospitalCode;
      console.log(this.loggedInAdminCode)
      console.log(this.looggedInAdmin)

  }
  refresh(){
    let resp=this.hospitalservice.getAllHospitals();
    resp.subscribe(
      (data)=>this.hospitals=data);
  }
      // seeDeptList(id:number){
      //   this.hospitalservice.getHospitalById(id).subscribe((data)=>{
      //     this.hospitals=data;
      //   })
      // }

      showdepartments(i:number){
          //this.hospitals
          //console.log(this.hospitals[i])
          //console.log("check")
          //console.log(this.hospitals[i]);
         
          console.log(i)

          // console.log("this.hospitals[i].departments")
          // console.log(this.hospitals[i].departments)
          //   console.log("this.hospitals[i].departments"
          //     )


            localStorage.setItem('hoSpitalId',JSON.stringify(this.hospitals[i].hospitalId))
            //console.log(localStorage.getItem('hoSpitalId'))


            // let hospitalIddd=localStorage.getItem('hoSpitalId')
            // let finalHospitalId=JSON.parse(hospitalIddd || '{}');
            // console.log(finalHospitalId)


            //localStorage.setItem("toBeDesplayedDepts2",JSON.stringify(this.hospitals[i]))
            // this.hospitalservice.getHospitalById(i).subscribe((data)=>{
            //   //console.log(data.departments)

            //   localStorage.setItem("toBeDesplayedDepts2",JSON.stringify(data))

            //   //console.log(localStorage.getItem("toBeDesplayedDepts2"))
            // })
          console.log(i)
          this.router.navigate(['RUDdepartment'])
      }

  }
  



  // updateHospitalType(hospitalId : number):void {
  //   const dialogConfig = new MatDialogConfig();

  //     dialogConfig.disableClose = false;
  //     dialogConfig.autoFocus = false;
  //     const dialogRef = this.dialog.open(UpdateDialogComponent, {
  //       width: '350px',
  //       data: {hospitalType: this.hospitalType},
  //     });
  
  
  //     dialogRef.afterClosed().subscribe((result) => {
  //       console.log('The dialog was closed');
  //       console.log(result);
  //       console.log(hospitalId);
  //       // this.hospitalName = result;
  //       this.hospitalservice.updateHospitalById(hospitalId,result,this.hospital).subscribe()
  //       window.location.reload();
  //     });
      
  //   };


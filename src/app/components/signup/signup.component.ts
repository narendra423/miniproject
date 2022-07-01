import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //admin:Admin=new Admin("","",0,"");
  

  constructor(private adminservice: AdminService,private snack:MatSnackBar,private router:Router,private toast:NgToastService) { }
  admins:any;
  newAdmin:any;

  ngOnInit(): void {
    this.adminservice.getAllAdmins().subscribe((result)=>{
      this.admins=result;
      //console.log(result);
    })
  }

  adminForm=new FormGroup({
    adminName:new FormControl('',[Validators.required]),
    adminEmail:new FormControl('',[Validators.required, Validators.minLength(1),Validators.email]),
    adminAge:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    // employeeId:new FormControl('',[Validators.required]),
    hospitalCode:new FormControl('',[Validators.required])

  })

  get adminName(){
    return this.adminForm.get('adminName');
  }

  get adminEmail(){
    return this.adminForm.get('adminEmail');
  }

  get adminAge(){
    return this.adminForm.get('adminAge');
  }
  get password(){
    return this.adminForm.get('password')
  }
  // get employeeId(){
  //   return this.adminForm.get('employeeId')
  // }
  get hospitalCode(){
    return this.adminForm.get('hospitalCode')
  }



  public onSubmit(){
    if(this.adminForm.invalid){
        alert("Form fields should not be empty");
    }
    else{
      this.newAdmin = this.admins.find((admin: { adminEmail: any; hospitalCode:any; }) => admin.adminEmail === this.adminForm.value.adminEmail || admin.hospitalCode==this.hospitalCode)
    if(this.newAdmin==undefined){
       this.adminservice.addAdmin(this.adminForm.value).subscribe((data)=>{
        //console.log(data)
        this.toast.success({detail:"Success",summary:"Admin SignedUp successfully",duration:5000})
        // this.router.navigate(['login'])
        this.adminForm.reset();
       },(error)=>{
        alert("Already one admin exists for the given hospitalCode")
       })

    }
    else{
     alert("Admin already exists with Given mail id")
     //this.toast.error({detail:"Failure",summary:"Admin Already exists with the given Emailid",duration:5000})
     this.router.navigate(['login'])
    }
    }

  }

}






  // public onSubmit(){
  //   if(this.adminForm.valid){
  //     this.adminservice.addAdmin(this.adminForm.value).subscribe(

  //       (data)=>{
  //         console.log(data)
  //         //console.log(this.adminForm.value)
  //         Swal.fire("Signed up","","success")
  //         this.router.navigate(["login"]);
  //       },(error)=>{
  //         console.log(error);
  //         Swal.fire("check all fields unable to signup","","error")
          
  //       }

  //     )
  //   }
  //   else{
  //     alert("Some fields are empty please check once");
  //   }
   
  // }


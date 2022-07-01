import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //admin:Admin=new Admin("","",0,"");
  

  constructor(private adminservice: AdminService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  adminForm=new FormGroup({
    adminName:new FormControl('',[Validators.required]),
    adminEmail:new FormControl('',[Validators.required, Validators.minLength(1)]),
    adminAge:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])

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

  public onSubmit(){
    if(this.adminForm.valid){
      this.adminservice.addAdmin(this.adminForm.value).subscribe(

        (data)=>{
          console.log(data)
          //console.log(this.adminForm.value)
          Swal.fire("Signed up","","success")
          this.router.navigate(["login"]);
        },(error)=>{
          console.log(error);
          Swal.fire("check all fields unable to signup","","error")
          
        }

      )
    }
    else{
      alert("Some fields are empty please check once");
    }
   
  }
}

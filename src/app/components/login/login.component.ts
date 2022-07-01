import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService:AdminService,private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  loginForm=new FormGroup({
    adminEmail:new FormControl(''),
    password: new FormControl('')
  })



  get adminEmail(){
    return this.loginForm.get('adminEmail');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
  public onSubmit(){
    //console.warn(this.loginForm.value);
    
    this.adminService.getAdmin(this.adminEmail?.value,this.password?.value).subscribe(
      (result) => {
        this.router.navigate(['subhome']);
        console.log("success");
      },
      (error) => {
        //this.snack.open("Wrong credentials","ok",{duration:2000})
        console.warn(error.error);
        console.log("failure");
        alert("Wrong credentials try again");
      },

    )

    }
}

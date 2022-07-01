import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router,Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showsignup:boolean=false;
  showlogin:boolean=false;
  showcontact:boolean=true;
  showabout:boolean=true;
  showlogout:boolean=true;
  constructor(private router:Router) {
      router.events.subscribe((event:Event) => {              
      
        if(event instanceof NavigationEnd){
          console.log(event.url)
          if(event.url==='/'){
            this.showsignup=false;
            this.showlogin=true;
            this.showlogout=false;
          }
          else if(event.url==='/login'){
            this.showlogin=false;
            this.showsignup=false;
            this.showcontact=true;
            this.showabout=true;
            this.showlogout=false;
            
          }
          else if(event.url==='/signup'){
            this.showlogin=false;
            this.showsignup=false;
            this.showcontact=true;
            this.showabout=true;
            
          }
          else if(event.url==='/hospital' || event.url==='/RUDdepartment' || event.url==='/RUDdoctor' || event.url==='/RUDpatient'){
            this.showlogout=true;
        }
        }
      })

   }

  ngOnInit(): void {
  }

}

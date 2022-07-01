import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydoctor',
  templateUrl: './displaydoctor.component.html',
  styleUrls: ['./displaydoctor.component.css']
})
export class DisplaydoctorComponent implements OnInit {
  doctor:any;

  constructor() { }

  ngOnInit(): void {
      let data1=localStorage.getItem('displayDoctor');
      let parsedData=JSON.parse(data1 || '{}') 
      this.doctor=parsedData;
       
  }

  refreshing(){
    window.location.reload();
  }

}

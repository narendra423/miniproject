import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-ruddoctor',
  templateUrl: './ruddoctor.component.html',
  styleUrls: ['./ruddoctor.component.css']
})
export class RUDdoctorComponent implements OnInit {

  constructor(private doctorservice:DoctorService) { }
  doctors:any;

  ngOnInit(): void {
    this.doctorservice.getAllDoctors().subscribe((data)=>this.doctors=data)


  }







}

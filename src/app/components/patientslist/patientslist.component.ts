
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { DoctorService } from 'src/app/service/doctor.service';
import { HospitalService } from 'src/app/service/hospital.service';
import { PatientService } from 'src/app/service/patient.service';
import { DisplaydoctorComponent } from '../displaydoctor/displaydoctor.component';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css'],
  
})
export class PatientslistComponent implements OnInit {

  patients:any;
  displayDoctor:any;
  // patientsNames:any;
  admitteddate:any;
  noresultsfound:boolean=false;
  showlist:boolean=true;
  mobilenumber!:string;
  
  streets: string[] = [];
  filteredStreets: Observable<string[]> | undefined;

  control = new FormControl('');
 public patientName =""
  

  constructor(private dialog:MatDialog,private doctorservice:DoctorService,private hs:HospitalService,private patientService:PatientService) { }

  ngOnInit(): void {
   


      this.filteredStreets = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );

      this.patientService.getAllPateintsNames().subscribe((data11:any)=>{
        //console.log(data);
        this.streets=data11;})


   this.patientService.getAllPateints().subscribe((data:any)=>{
   // console.log(data)

    this.patients=data;

   },(error)=>{
    console.log(error)
   })

   

  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  
  
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


  called(data:any){
    console.log(data)
  }


  getFilterredPatients(filteredStreets:any){
    console.log("hi")
    let datasa:any;
    this.filteredStreets?.subscribe((data)=>{
      datasa=data;
      this.called(data)
      
      

    })
    
    
  }

  getDoctor(patientId:Number){
    
    this.patientService.getDoctorWithPatientId(patientId).subscribe((data1111)=>{

      //console.log(data1111)
      this.displayDoctor=data1111;
      //console.log(this.displayDoctor)
      let doctor222 =JSON.stringify(this.displayDoctor)
      localStorage.setItem('displayDoctor',doctor222)

    })

    //console.log(this.displayDoctor);

    const dialogRef = this.dialog.open(DisplaydoctorComponent, {
       width: '700px',
       //data: {name: this.name, animal: this.animal},
     });


  }

  findPatientsByAdmittedDate(){
    // const tempdate = this.datePipe.transform(this.admitteddate, 'yyyy-MM-dd');
    // console.log(this.datePipe.transform(this.admitteddate, 'yyyy-MM-dd'))
    this.patientService.getPatientsByAdmittedDate(this.admitteddate).subscribe((resp)=>{
      this.patients=resp;
      console.log("successsss")
      if(this.patients.length==0){
        
        this.noresultsfound=true;
      this.showlist=false;
      }
    },
    (error)=>{
      alert("Please Choose the date")
      
      
    })

  }
  

  refresh(){
    this.patientService.getAllPateints().subscribe((data)=>{
      this.patients=data;
    })
  }
  showtables(){
    this.patientService.getAllPateints().subscribe((data)=>{
      this.patients=data;
    })
    this.noresultsfound=false;
      this.showlist=true;
  }

}
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:9090/doctor";
  
  addDoctor(doctor:any){
    return this.http.post(`${this.baseUrl}/addDoctor`,doctor);
  }

  getAllDoctors():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAllDoctors`)
  }

  getPatientsByDoctor(doctorId:any):Observable<any>{
    const params=new HttpParams().set('doctorId',doctorId)
    return this.http.get<any>(`${this.baseUrl}/getPatients`,{params})
  }
  assignPatientToDoctor(patientId:number,doctorId:number,value:any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/assignPatientstoDoctorWithId?patientId=${patientId}&doctorId=${doctorId}`,value);
  }
        
  deleteDoctor(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteDoctor/${id}`);
  }

  getDoctorById(id:number){
    return this.http.get(`${this.baseUrl}/readDoctorById/${id}`)
  }

}

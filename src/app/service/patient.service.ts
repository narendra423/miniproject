import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:9090/patient";
  
  addPatient(patient:Patient){
    return this.http.post(`${this.baseUrl}/add`,patient);

  }

  getAllPateints(){
    return this.http.get(`${this.baseUrl}/getAllPatients`);
  }

  getCurrentPatientIdByMobile(mobilenumber:any){
    return this.http.get(`${this.baseUrl}/getCurrentPatientId/${mobilenumber}`)
  }

  getPatientsByAdmittedDate(date:Date){
    return this.http.get(`${this.baseUrl}/readByAdmittedDate/${date}`)
  }

  getDoctorWithPatientId(patientId:any){
    const params=new HttpParams().set('patientId',patientId)
    return this.http.get(`${this.baseUrl}/findDoctorWithPatientId`,{params})
  }

  getAllPateintsNames(){
    return this.http.get(`${this.baseUrl}/getAllPatientNames`);
  }

  getPateintById(id:number){
    return this.http.get(`${this.baseUrl}/readById/${id}`);
  }
  deletepatientById(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletePatientById/${id}`);
  }

}

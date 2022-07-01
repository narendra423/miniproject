import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../model/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http:HttpClient) { }

  private baseUrl='http://localhost:9090/hospital';

  addHospital(hospital:Hospital){
    return this.http.post(`${this.baseUrl}/add`,hospital);
  }

  getAllHospitals():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAllHospitals`);
  }

  getHospitalByLocation(hcode:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/readByHospitalCode/${hcode}`);
  }

  getHospitalById(id:number){
    return this.http.get<any>(`${this.baseUrl}/getHospitalById/${id}`);
  }

  updateHospitalById(id:number,value:string, value2: any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/updateHospitalTypeById/${id}/${value}`, value2);
  }

  deleteHospital(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteHospitalById/${id}`);
  }

  getHospital(id:number,data:Hospital){
    return this.http.get<any>(`${this.baseUrl}/updateHospital`,data);
  }
  updateHospital(hospital:Hospital){
    return this.http.post(`${this.baseUrl}/updateHospital`,hospital);
  }
  

}

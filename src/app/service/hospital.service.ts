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

  getHospitalByLocation(location:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/readByLocation/${location}`);
  }

  getHospitalById(id:number){
    return this.http.get<any>(`${this.baseUrl}/readById/${id}`);
  }

  updateHospitalById(id:number,value:string, value2: any):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/updateHospitalTypeById/${id}/${value}`, value2);
  }

  deleteHospital(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteHospitalById/${id}`);
  }

}

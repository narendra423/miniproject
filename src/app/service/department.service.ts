import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  private baseUrl23="http://localhost:9090/department";

  addDepartment(department:Department){
    return this.http.post(`${this.baseUrl23}/addDepartment`,department)
  }

  getallDepartments(){
    return this.http.get(`${this.baseUrl23}/getAllDepartments`)
  }

  deleteDepartment(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl23}/deleteDepartment/${id}`);
  }
  updateDepartmentFloor(floor:any,id:number,value:any):Observable<any>{
    return this.http.put(`${this.baseUrl23}/updateFloorById/${floor}/${id}`,value);
  }

  

  getDepartmentById(id:number){
    return this.http.get(`${this.baseUrl23}/readDepartment/${id}`)
  }

}

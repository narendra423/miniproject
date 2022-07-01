import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  private baseUrl = 'http://localhost:9090/admin';

   addAdmin(admin:Admin){
    return this.http.post(`${this.baseUrl}/addAdmin`,admin,{responseType: 'text'});
  }
   
  getAdmin(mail:string,password:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAdmin/${mail}/${password}`);
  }
  getAllAdmins(){
    return this.http.get(`${this.baseUrl}/getAllAdmins`);
  }



}

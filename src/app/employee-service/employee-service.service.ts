import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../employee-model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  
  postUrl="http://localhost:8080/api/employee/saveEmployees"

  getAllUrl= "http://localhost:8080/api/employee/getAllEmloyees";

  getUrlById="http://localhost:8080/api/employee/getEmloyeeById/";

  deleteUrl="http://localhost:8080/api/employee/deleteEmployee/";

  constructor(private httpClient:HttpClient) { }

  saveEmployeeData(employee:Employee):Observable<Employee>{
   return this.httpClient.post<Employee>(this.postUrl,employee);
  }

  getAllEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.getAllUrl);
}

getEmployeeById(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(this.getUrlById+id);
}

deleteById(id:number):Observable<void>{
  console.log(this.deleteUrl+id);
  return this.httpClient.delete<void>(this.deleteUrl+id)
  
}

 
}


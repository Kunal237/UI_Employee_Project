import { Component, OnInit } from '@angular/core';
import { Employee } from './../../employee-model/employee';
import { EmployeeServiceService } from './../../employee-service/employee-service.service';
import { catchError, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-employee-grid-table',
  templateUrl: './employee-grid-table.component.html',
  styleUrls: ['./employee-grid-table.component.css']
})
export class EmployeeGridTableComponent implements OnInit {
 // employeeAllStream!:Observable<Employee[]>;
  employeeAllStream!:Employee[];
  employeeStream!:Observable<Employee>;
  employeeStreamError=new Subject<boolean>();
  Value:string='';

  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
 this.getALlEmployees();
  }

  public getALlEmployees(){
    this.employeeService.getAllEmployees().subscribe((response): void=>{
      this.employeeAllStream=response;
    })
    }

    // public getEmployeeById(eid:number){
    //   this.employeeStream=this.employeeService.getEmployeeById(eid).pipe(
    //     catchError((error) => {
    //       console.log('error',error)
    //       this.employeeStreamError.next(true);
    //       return of();
    //     }),
    //   );
    // }
  

public deleteEmployee(data:Employee){
this.employeeService.deleteById(data.eid?data.eid:0).subscribe(
res=>console.log(res),
error=> console.log(error),
()=> this.getALlEmployees()
);
}

}


  



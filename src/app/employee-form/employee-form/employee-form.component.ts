import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/employee-service/employee-service.service';
import { Employee } from './../../employee-model/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
 viewErrorMessage:boolean=false;
  employeeForm!: FormGroup;
  employee!: Employee;
  errorMessage!:Object

  constructor(private employeeService: EmployeeServiceService) {}


  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.employeeForm = new FormGroup({
      'fname': new FormControl(null, [Validators.required]),
      'lname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'addre': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])

    });
  }

  onSubmit(employeeForm: FormGroup): void{
    if (this.employeeForm.valid) {
      this.employee={ 
       firstName :this.employeeForm.value.fname,
       lastName :this.employeeForm.value.lname,
       emailId :this.employeeForm.value.email,
       address :this.employeeForm.value.addre,
       mobileNumber:this.employeeForm.value.mobile
      };
     
      this.employeeService.saveEmployeeData(this.employee).
      subscribe((result: Employee): void => {
        console.log(result);
        this.viewErrorMessage=false;
      },
      (error)=>{
        console.log('error',error);
        this.viewErrorMessage=true;
        this.errorMessage=error.error.body;

      },
      ()=> {
        this.viewErrorMessage=false;
         this.employeeForm.reset()
      }
      );
    
    }
  }

  clear():void {
    this.employeeForm.reset();
  }

}

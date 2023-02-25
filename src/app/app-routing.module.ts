import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form/employee-form.component';
import { EmployeeGridTableComponent } from './employee-grid-table/employee-grid-table/employee-grid-table.component';

const routes: Routes = [
  {path:'employeeForm',component:EmployeeFormComponent},
  {path:'employeeGridTable',component:EmployeeGridTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

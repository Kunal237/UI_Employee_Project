import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form/employee-form.component';
import { EmployeeGridTableComponent } from './employee-grid-table/employee-grid-table/employee-grid-table.component';
import { EmployeeServiceService } from './employee-service/employee-service.service';
import { EmployeeFilterPipe } from './employee-grid-table/EmployeeFilterPipe';
import { ErrorMessageComponent } from './error-message/error-message/error-message.component';
import { EmployeeModelComponent } from './employee-model/employee-model.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeGridTableComponent,
    EmployeeFilterPipe,
    ErrorMessageComponent,
    EmployeeModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

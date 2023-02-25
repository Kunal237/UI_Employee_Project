import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from './../employee-model/employee';

@Pipe({
name :"filterPipe"
})
export class EmployeeFilterPipe implements PipeTransform{
    transform(value: Employee[],search:string ):Employee[] {
        if(value){
        if(value.length===0 || search===''){
        return value;
        }
        else{
        return value.filter(x=>x.firstName.toLowerCase().indexOf(search.toLowerCase())!=-1);
       }
    
    }
    return [];
    }
}
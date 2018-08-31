import  {Injectable} from '@angular/core';


@Injectable()
export class EmployeeService {
    GetList():any[]{

       let employees:any[]=[
            {Id:1,Name:"Nguyen Van C"},
            {Id:2,Name:"Nguyen Van A"},
            {Id:3,Name:"Nguyen Van B"},
            {Id:4,Name:"Nguyen Van E"}
        ];
        return employees;
    }

}
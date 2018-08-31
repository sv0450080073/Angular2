import {Component,OnInit}  from '@angular/core';
import {EmployeeService} from './service/employee.service';


@Component ({
selector:'employee-list',
templateUrl:'./employee.component.html',
providers:[EmployeeService]
})
export class employeeListComponent implements OnInit
{
    constructor(private employeeService : EmployeeService)
    {
 
    }
    ngOnInit()
    {
        this.employees=this.employeeService.GetList();
    }
    public employees:any[];
}
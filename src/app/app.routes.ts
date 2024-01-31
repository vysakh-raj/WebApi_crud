import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

export const routes: Routes = [
    
    {
        path:'employees',component:EmployeesComponent,
    },
    {
        path:'employees/add',component:AddemployeeComponent,
    }
];

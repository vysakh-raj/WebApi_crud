import { Component } from '@angular/core';
import { Employee } from '../employees/models/employee.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {

  addEmployeeRequest :Employee={
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  }
}

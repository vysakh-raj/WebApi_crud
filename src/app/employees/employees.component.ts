import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'], // Use 'styleUrls' instead of 'styleUrl'
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees; // Assuming you want to assign the fetched employees to the class property
      },
      error: (response) => { // Use 'response' instead of 'responce'
        console.log(response);
      },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { Employee } from '../employees/models/employee.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }
}

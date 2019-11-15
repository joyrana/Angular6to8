import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  getEmployee(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

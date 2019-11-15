import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rxjsexample',
  templateUrl: './rxjsexample.component.html',
  styleUrls: ['./rxjsexample.component.css']
})
export class RXJSExampleComponent implements OnInit {
  public employees$: Observable<any[]>;
  constructor(public http: HttpClient, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee() {
    this.employees$ = this.employeeService.getEmployee();

  }

}

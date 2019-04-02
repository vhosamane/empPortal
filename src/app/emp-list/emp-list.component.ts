import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './../services/registration.service';
import { EmpData } from './../Model/emp-data';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees: Array<EmpData>;

  constructor(private empService: RegistrationService) { }

  ngOnInit() {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.empService.getAllEmployees().subscribe((res) => {
      this.employees = res;
    });
  }

}

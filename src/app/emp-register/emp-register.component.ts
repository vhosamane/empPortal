import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpData } from "./../Model/emp-data";
import { RegistrationService } from "./../services/registration.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent implements OnInit {

  empData: EmpData;

  constructor(private empService: RegistrationService, private router: Router) { 
    this.empData = new EmpData();
  }

  ngOnInit() {
  }

  empRegistrationData(empRegistrationData: NgForm) {
    if(empRegistrationData.valid) {
      let nameCapitalized  = this.empData.firstName;
      nameCapitalized = nameCapitalized.charAt(0).toUpperCase() + nameCapitalized.substr(1).toLowerCase();
      this.empData.firstName = nameCapitalized;
      this.empService.registerEmp(this.empData);
      empRegistrationData.resetForm();
      this.router.navigate(['/list']);
    }
  }

  clearValues(empRegistrationData: NgForm) {
    empRegistrationData.resetForm();
  }


}

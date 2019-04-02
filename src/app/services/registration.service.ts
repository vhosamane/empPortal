import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { HttpClient } from '@angular/common/http';
import { EmpData } from './../Model/emp-data';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private db: AngularFireDatabase, private http: HttpClient) { }

  registerEmp(empDetails: any) {
    this.db.list('/employee').push(empDetails);
  }

  getAllEmployees() {
    return this.http.get(environment.apiUrl + '/employee.json')
            .pipe(map((res) => {
              const data = res;
              const empDetails: EmpData[] = [];
              for(let key in data) {
                let empdetail = data[key];
                empDetails.push(empdetail);
              }
              return empDetails;
            }));
  }
}

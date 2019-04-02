import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpRegisterComponent } from './emp-register/emp-register.component';
import { EmpListComponent } from './emp-list/emp-list.component';

const routes: Routes = [
  { path: 'register', component: EmpRegisterComponent },
  { path: 'list', component: EmpListComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

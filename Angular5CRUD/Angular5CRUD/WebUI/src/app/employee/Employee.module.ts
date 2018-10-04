import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './Services/employee.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		NgxPaginationModule
	],
	declarations: [
		EmployeesComponent,
		EmployeeDetailComponent,
		EmployeeAddComponent,
		EmployeeEditComponent
	],
	entryComponents: [
		EmployeeDetailComponent
	],
	providers: [
		EmployeeService
	]
})
export class EmployeeModule { }

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Employee } from '../../Models/employee';
import { PagerModel } from '../../Models/PagerModel';
import { Pager } from '../../Shared/app.globals';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeNodeService } from '../services/employee-node.service';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
	employees: Employee[];
	employee: Employee;
	pagerModel: PagerModel;

	constructor(
		private employeeService: EmployeeNodeService,
		private dialog: MatDialog) {
		this.pagerModel = new PagerModel();
		this.pagerModel.CurrentPage = Pager.CurrentPage;
		this.pagerModel.PageSize = Pager.PageSize;
	}

	ngOnInit() {
		this.employeeService.getEmployees(this.pagerModel);
	}

	private selectItem(employee: Employee) {
		const dialogRef: MatDialogRef<EmployeeDetailComponent> = this.dialog
			.open(EmployeeDetailComponent, {
				data: {
					employee: employee,
				}
			});
	}

	public onPageChange(pageNumber: any) {
		this.pagerModel.CurrentPage = pageNumber;
		this.employeeService.getEmployees(this.pagerModel);
		console.log(this.pagerModel.CurrentPage);
	}
}

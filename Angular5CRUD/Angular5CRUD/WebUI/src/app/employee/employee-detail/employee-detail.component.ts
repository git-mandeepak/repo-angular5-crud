import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { Employee } from '../../Models/employee';


@Component({
	selector: 'app-employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
	private employee: Employee;
	constructor(
		private router: Router,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<EmployeeDetailComponent>,
	) { }

	ngOnInit() {
		this.employee = this.data.employee;
		console.log(this.employee);
	}

	editEmployee() {
		this.router.navigate(['/employee/edit/', this.employee.EmployeeID]).then(() => {
			this.dialogRef.close();
		});
	}

}

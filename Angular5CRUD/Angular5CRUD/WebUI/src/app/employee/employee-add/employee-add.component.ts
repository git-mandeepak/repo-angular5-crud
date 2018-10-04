import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../../Models/employee';
import { EmployeeService } from '../Services/employee.service';


@Component({
	selector: 'app-employee-add',
	templateUrl: './employee-add.component.html',
	styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
	private employee: Employee;
	empForm: FormGroup;
	isFirstNameInValid = false;
	isLastNameInValid = false;
	isTitleInValid = false;
	isHomePhoneInValid = false;
	constructor(
		private fb: FormBuilder,
		private employeeService: EmployeeService,
		private router: Router,
		private route: ActivatedRoute) {
		this.createForm();
	}

	private createForm() {
		this.empForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			title: ['', Validators.required],
			homePhone: ['', Validators.required]
		});
	}

	ngOnInit() {
		this.employee = new Employee();
		this.employee.FirstName = '';
		this.employee.LastName = '';
		this.employee.Title = '';
		this.employee.HomePhone = '';
	}

	public add(empForm: any) {
		if (empForm.invalid) {
			if ((empForm.controls.firstName.errors && empForm.controls.firstName.errors.required)) {
				this.isFirstNameInValid = true;
			}
			if ((empForm.controls.lastName.errors && empForm.controls.lastName.errors.required)) {
				this.isLastNameInValid = true;
			}
			if ((empForm.controls.title.errors && empForm.controls.title.errors.required)) {
				this.isTitleInValid = true;
			}
			if ((empForm.controls.homePhone.errors && empForm.controls.homePhone.errors.required)) {
				this.isHomePhoneInValid = true;
			}
		} else {
			console.log(this.employee);
			this.employeeService.createEmployees(this.employee)
			.subscribe((result) => {
				console.log('Result: ' + result);
				this.router.navigate(['/apphome/employees']);
			});
		}
	}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../../Models/employee';
import { PagerModel } from '../../Models/PagerModel';
import { GlobalUrls } from '../../Shared/app.globals';
import { environment } from '../../../environments/environment';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeNodeService {

	private employeesUrl = '/rmemployee/employees';  // URL to web api
	private editEmplUrl = '/rmemployee/editemployee';  // URL to web api
	private createEmplUrl = '/rmemployee/createemployee';  // URL to web api
	public employees: Employee[];
	public totalRecords: number;
	public isLoading: boolean;

	constructor(private http: HttpClient) { }

	public getEmployees(pagerModel: PagerModel): void {
		this.isLoading = true;
		this.http.post<Employee[]>(environment.apiBaseUrl + this.employeesUrl, pagerModel, httpOptions)
			.subscribe((employees: Employee[]) => {
				this.employees = employees;
				console.log(this.employees);
				this.totalRecords = employees[0].TotalRecords;
				this.isLoading = false;
			});
	}

	public editEmployees(employee: Employee) {
		this.isLoading = true;
		return this.http.put(GlobalUrls.RootUrl + this.editEmplUrl, employee, httpOptions);
	}

	public createEmployees(employee: Employee) {
		this.isLoading = true;
		return this.http.post(GlobalUrls.RootUrl + this.createEmplUrl, employee, httpOptions);
	}
}

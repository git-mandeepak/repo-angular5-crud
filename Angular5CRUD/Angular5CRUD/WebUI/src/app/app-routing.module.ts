import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Employee/employee-edit/employee-edit.component';
import { EmployeesComponent } from './Employee/employees/employees.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './order/orders/orders.component';
import { OrderStatsComponent } from './order/order-stats/order-stats.component';

const appRoutes: Routes = [
	{
		path: 'employee',
		component: AppHomeComponent,
		data: { title: 'App Home' },
		children: [
			{ path: 'list', component: EmployeesComponent, },
			{ path: 'add', component: EmployeeAddComponent },
			{ path: 'edit/:id', component: EmployeeEditComponent },
			{ path: 'order', component: OrderComponent }
		]
	},
	{
		path: 'signup', component: UserComponent,
		children: [{ path: '', component: SignUpComponent }]
	},
	{
		path: 'login', component: UserComponent,
		children: [{ path: '', component: SignInComponent }]
	},
	{
		path: '', redirectTo: '/login', pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false }
		)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }

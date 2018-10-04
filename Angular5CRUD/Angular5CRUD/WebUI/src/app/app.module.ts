// Built-in
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF, Location } from '@angular/common';

// Components
import { AppHomeComponent } from './app-home/app-home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './Employee/Employee.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { getBaseLocation } from './Shared/app.globals';

@NgModule({
	declarations: [
		AppComponent,
		AppHomeComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		HttpClientModule,
		MatDialogModule,
		FormsModule,
		NoopAnimationsModule,

		EmployeeModule,
		UserModule,
		OrderModule,
		AppRoutingModule,
	],
	providers: [
		{
			provide: APP_BASE_HREF,
			useFactory: getBaseLocation
		},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				// panelClass: 'modal-popup-container'
			}
		}],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }

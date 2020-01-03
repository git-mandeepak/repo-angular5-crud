import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule
	],
	declarations: [
		UserComponent,
		SignInComponent,
		SignUpComponent
	],
	providers: [
		UserService
	]
})
export class UserModule {

	constructor() {
		console.log("user module loaded");
	}
 }

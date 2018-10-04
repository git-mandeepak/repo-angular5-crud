import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

import { User } from '../../models/user.model';
import { UserService } from '../user.service';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
	private user: User;
	signupForm: FormGroup;
	isFirstNameInValid: boolean;
	isLastNameInValid: boolean;
	isEmailInValid: boolean;
	isEmailInValidAddress: boolean;
	isUsernameInValid: boolean;
	isPasswordInValid: boolean;
	showSuccessMessage: boolean;
	emailRegex: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	constructor(
		private fb: FormBuilder,
		private userService: UserService,
		private router: Router) {
		this.createForm();
	}

	ngOnInit() {
		this.user = new User();
		this.user.UserName = '';
		this.user.Email = '';
		this.user.FirstName = '';
		this.user.LastName = '';
		this.user.Password = '';
		this.resetForm();
	}

	createForm() {
		this.signupForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.required],
			userName: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	resetForm() {
		this.isFirstNameInValid = false;
		this.isLastNameInValid = false;
		this.isEmailInValid = false;
		this.isEmailInValidAddress = false;
		this.isUsernameInValid = false;
		this.isPasswordInValid = false;
	}

	public register(signupForm: any) {
		this.resetForm();
		if (signupForm.invalid) {
			if ((signupForm.controls.firstName.errors && signupForm.controls.firstName.errors.required)) {
				this.isFirstNameInValid = true;
			}
			if ((signupForm.controls.lastName.errors && signupForm.controls.lastName.errors.required)) {
				this.isLastNameInValid = true;
			}
			if ((signupForm.controls.email.errors && signupForm.controls.email.errors.required)) {
				this.isEmailInValid = true;
			}
			if ((signupForm.controls.email.errors && signupForm.controls.email.errors.pattern)) {
				this.isEmailInValidAddress = true;
			}
			if ((signupForm.controls.userName.errors && signupForm.controls.userName.errors.required)) {
				this.isUsernameInValid = true;
			}
			if ((signupForm.controls.password.errors && signupForm.controls.password.errors.required)) {
				this.isPasswordInValid = true;
			}
		} else {
			this.user.Password = this.doEncrypt(this.user.Password);
			this.userService.registerUser(this.user)
				.subscribe((result) => {
					console.log('Result: ' + result);
					this.showSuccessMessage = true;
					setTimeout(() => {
						this.showSuccessMessage = false;
						this.router.navigate(['/login']);
					} , 4000);
				});
		}
	}

	doEncrypt(password: string): string {
		const key = CryptoJS.enc.Base64.parse(password);
		const iv = CryptoJS.enc.Base64.parse('#base64IV#');
		const encrypted = CryptoJS.AES.encrypt('Secret Text', key, { iv: iv }).toString();
		return encrypted;
	}

}

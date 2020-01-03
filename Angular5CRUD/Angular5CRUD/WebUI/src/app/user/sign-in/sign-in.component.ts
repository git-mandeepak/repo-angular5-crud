import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { doEncrypt } from '../../Shared/app.globals';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
	loginForm: FormGroup;
	userName: any = '';
	password: any = '';
	serverErrorMessages: string;
	showErrorMessage = false;

	constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
		console.log("sign in cllaws");
	}

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.loginForm = this.fb.group({
			userName: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	Signin() {
		this.userService.userAuthNodeServer(this.userName, doEncrypt(this.password))
			.subscribe(result => {
				this.userService.setToken(result["token"]);
				this.router.navigate(['/employee', 'list']);
			},
			err => {
				this.showErrorMessage = true;
				this.serverErrorMessages = err.error.message;
			});
	}

	reset() {
		this.showErrorMessage = false;
	}

	keyDownFunction(event) {
		if (event.keyCode === 13) {
		  this.Signin();
		}
	  }

}

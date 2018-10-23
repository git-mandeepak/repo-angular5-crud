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

	constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.loginForm = this.fb.group({
			userName: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	onSignin() {
		this.userService.userAuthNodeServer(this.userName, doEncrypt(this.password))
		.subscribe(result => {
			localStorage.setItem("token", result["token"]);
			console.log(localStorage.getItem("token"));
			this.router.navigate(['/employee', 'list']);
		});

		//this.router.navigate(['/employee', 'list']);
		//console.log("Sign in hit" + this.userName);
	}

}

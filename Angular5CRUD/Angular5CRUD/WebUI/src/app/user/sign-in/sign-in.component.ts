import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
	loginForm: FormGroup;
	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.loginForm = this.fb.group({

		});
	}

}

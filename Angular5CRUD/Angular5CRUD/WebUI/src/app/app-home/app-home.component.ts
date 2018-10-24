import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
	selector: 'app-app-home',
	templateUrl: './app-home.component.html',
	styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

	constructor(private router: Router, private userService: UserService) { }

	ngOnInit() {

	}

	logOut() {
		this.userService.deleteToken();
		this.router.navigateByUrl('/login');
	}

}

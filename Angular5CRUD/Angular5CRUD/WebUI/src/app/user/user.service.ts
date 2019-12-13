import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {
	//readonly rootUrl = 'http://gind04lxb5rf0n2.bdx.com/EM.WebApi/api';
	readonly rootUrl = environment.apiBaseUrl;
	constructor(private http: HttpClient) { }

	registerUser(user: User) {
		const body: User = {
			UserName: user.UserName,
			Password: user.Password,
			Email: user.Email,
			FirstName: user.FirstName,
			LastName: user.LastName
		};

		const reqHeader = new HttpHeaders({ 'No-Auth': 'True', 'Content-Type': 'application/json' });
		//return this.http.post(this.rootUrl + '/api/User/Register', body, { headers: reqHeader });
		return this.http.post(this.rootUrl + '/User/register', body, { headers: reqHeader });
	}

	userAuthentication(userName, password) {
		const data = 'username=' + userName + '&password=' + password + '&grant_type=password';
		const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
		return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
	}

	getUserClaims() {
		return this.http.get(this.rootUrl + '/api/GetUserClaims');
	}

	userAuthNodeServer(email, password) {
		const data = {
			"email": email,
			"password": password
		};
		const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
		return this.http.post(this.rootUrl + '/user/authenticate', data, { headers: reqHeader });
	}

	setToken(token: string) {
		localStorage.setItem("token", token);
	}

	deleteToken() {
		localStorage.removeItem('token');
	}

	getToken() {
		return localStorage.getItem('token');
	}

	getUserPayload() {
		const token = this.getToken();
		if (token) {
			const userPayload = atob(token.split('.')[1]);
			return JSON.parse(userPayload);
		} else {
			return null;
		}
	}

	isLoggedIn() {
		const userPayload = this.getUserPayload();
		if (userPayload) {
			console.log(userPayload);
			console.log(Date.now() + "****************" + (Date.now() / 1000));
		  return userPayload.exp > Date.now() / 1000;
		} else {
		  return false;
		}
	  }
}

import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {
	//readonly rootUrl = 'http://gind04dxb4wj542.bdx.com/em.webapi';
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
		return this.http.post(this.rootUrl + '/Users/register', body, { headers: reqHeader });
	}

	userAuthentication(userName, password) {
		const data = 'username=' + userName + '&password=' + password + '&grant_type=password';
		const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
		return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
	}

	getUserClaims() {
		return this.http.get(this.rootUrl + '/api/GetUserClaims');
	}

}

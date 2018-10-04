import { Injectable } from '@angular/core';
import { TotalOrderByRange } from '../../models/TotalOrderByRange';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalUrls } from '../../Shared/app.globals';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderStatsService {

    private totalOrdersByRangeUrl = '/api/getTotalOrdersByMonth';  // URL to web api
	public totalRecords: number;
	public isLoading: boolean;

	constructor(private http: HttpClient) { }

	public getTotalOrdersByMonth(fromDate: Date, toDate: Date): Observable<TotalOrderByRange[]> {
		this.isLoading = true;
		return this.http.post<TotalOrderByRange[]>(
            GlobalUrls.RootUrl + this.totalOrdersByRangeUrl,
            {
                FromDate: fromDate,
                ToDate: toDate
            },
            httpOptions);
	}

}

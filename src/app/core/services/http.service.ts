import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private readonly apiURL: string;
    private readonly headers = { 'Content-Type': 'application/json' }

    constructor(private httpClient: HttpClient) {
        this.apiURL = 'api/';
    }

    public get(url: string): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiURL + url, {
            headers: this.headers
        }).pipe(catchError(err => {
            return this.errorHandler(err)
        }))
    }

    public getOne(url: string, _id: any): Observable<any> {
        const _url = `${this.apiURL + url}/${_id}`;
        return this.httpClient.get<any>(_url).pipe(catchError(err => {
            return this.errorHandler(err)
        }))
    }

    public put(url: string, data: any): Observable<any> {
        return this.httpClient.put(this.apiURL + url, data, {
            headers: this.headers
        }).pipe(catchError(err => {
            return this.errorHandler(err)
        }))
    }

    public post(url: string, data: any): Observable<any> {
        return this.httpClient.post<any>(this.apiURL + url, data, {
            headers: this.headers
        }).pipe(catchError(err => {
            return this.errorHandler(err)
        }))
    }

    public delete(url: string, data: any | number): Observable<any> {
        const _id = typeof data === 'number' ? data : data._id;
        const _url = `${this.apiURL + url}/${_id}`;
        return this.httpClient.delete<any>(_url, {
            headers: this.headers
        }).pipe(catchError(err => {
            return this.errorHandler(err)
        }))
    }

    private errorHandler(error: HttpErrorResponse) {
        return throwError(() => error)
    }
    
}
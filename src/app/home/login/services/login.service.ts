import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { LoginInterface } from '../interfaces/login.interface';

@Injectable()
export class LoginService {

    private readonly baseUrl: string;

    constructor(private httpService: HttpService) {
        this.baseUrl = 'auth/login';
    }

    public login(user: LoginInterface): Observable<any> {
        return this.httpService.post(this.baseUrl, user);
    }

}
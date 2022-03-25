import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable()
export class LoginService {

    private readonly baseUrl: string;

    constructor(private httpService: HttpService) {
        this.baseUrl = 'auth/login';
    }

    login(user: any) {
        return new Promise((resolve) => {
            window.localStorage.setItem('token', 'my-token')
            resolve(true)
        })
    }

}
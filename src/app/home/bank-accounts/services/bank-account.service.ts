import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable()
export class BamkAccountsService {

    private readonly baseUrl: string;

    constructor(private httpService: HttpService) {
        this.baseUrl = 'bankAccounts';
    }

    public all(): Observable<any[]> {
        return this.httpService.get(this.baseUrl);
    }
}
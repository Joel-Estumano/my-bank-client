import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";

@Injectable()
export class ContaDigitalService {

  private readonly baseUrl: string;

  constructor(private httpService: HttpService) {
    this.baseUrl = 'gerencianet';
  }

  public insert(model: any): Observable<any> {
    return this.httpService.post(this.baseUrl, model)
  }
}
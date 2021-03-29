import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/entity/creditCard';
import { ResponseModel } from '../models/response/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl: string = 'https://localhost:44304/api/payments/';
  constructor(private httpClient: HttpClient) {}

  Add(creditCard:CreditCard): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath,creditCard);
  }
}

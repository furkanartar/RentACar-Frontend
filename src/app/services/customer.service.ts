import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/entity/customer';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = 'https://localhost:44304/api/customers/getall';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}

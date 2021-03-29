import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from 'src/app/models/dto/rentalDetail';
import { Rental } from 'src/app/models/entity/rental';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';
import { ResponseModel } from 'src/app/models/response/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44304/api/rentals/';

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + "getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }

  getRentalsByCarId(carId:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "getallbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getPaymentMethodNotAddedByCarId(carId:number): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "getpaymentmethodnotaddedbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  add(rental:Rental): Observable<ResponseModel> {
    let newPath = "https://localhost:44304/api/rentals/add"
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
}
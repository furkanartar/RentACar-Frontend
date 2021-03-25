import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/entity/rental';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44304/api/rentals/';

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "getrentaldetails"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(carId:number, customerId:number, rentDate:Date, returnDate:Date): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "add?carId=" + carId + "&customerId=" + customerId + "&rentDate=" + rentDate + "&returnDate=" + returnDate
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/dto/carDetail';
import { Car } from 'src/app/models/entity/car';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'https://localhost:44304/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getAllCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcarsbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcarsbycolorid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByCarId(carId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcardetailsbyid?id=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/response/listResponseModel';
import {CarDetail} from '../models/dto/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

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

  getCarDetailsByBrandIdAndColorId(brandId:number, colorId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcarsbybrandandidandcolorid?brandId=' + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}

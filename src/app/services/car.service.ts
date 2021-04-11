import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseModel} from '../models/response/responseModel';
import {HttpClient} from '@angular/common/http';
import {Car} from '../models/entity/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  apiUrl: string = 'https://localhost:44304/api/cars/';

  constructor(private httpClient:HttpClient) {}

  add(car:Car):Observable<ResponseModel>{
    const newPath = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  update(car:Car):Observable<ResponseModel>{
    const newPath = this.apiUrl + "update";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
}

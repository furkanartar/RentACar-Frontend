import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';
import { Brand } from 'src/app/models/entity/brand';
import {ResponseModel} from '../models/response/responseModel';
import {Car} from '../models/entity/car';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = 'https://localhost:44304/api/brands/';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    const newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    const newPath = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }

  update(brand:Brand):Observable<ResponseModel>{
    const newPath = this.apiUrl + "update";
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
}

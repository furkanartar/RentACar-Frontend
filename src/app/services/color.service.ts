import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/entity/color';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';
import {ResponseModel} from '../models/response/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {

  apiUrl: string = 'https://localhost:44304/api/colors/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    const newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    const newPath = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, color);
  }
}

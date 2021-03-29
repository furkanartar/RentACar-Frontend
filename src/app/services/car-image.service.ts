import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/entity/carImage';
import { ListResponseModel } from 'src/app/models/response/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {

  apiUrl = 'https://localhost:44304/api/carimages/';
  carImages:CarImage[];

  constructor(private httpClient: HttpClient) {}

  GetCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'getimagesbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}

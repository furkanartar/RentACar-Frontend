import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/dto/carDetail';
import { CarImage } from 'src/app/models/entity/carImage';
import { CarService } from 'src/app/services/car/car.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: CarDetail[];
  carImages:CarImage[];
  constructor(private carService: CarService, private CarImageService:CarImageService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if (params["carId"]) {
      this.getCarDetailsByCarId(params["carId"]);
      this.getCarImagesByCarId(params["carId"])
    } else {
      console.log("carId tespit edilemedi")
    }
  })
  }

  getCarDetailsByCarId(carId: number) {
    return this.carService
      .getCarDetailsByCarId(carId)
      .subscribe((params) => (this.cars = params.data));
  }

  getCarImagesByCarId(carId: number) {
    return this.CarImageService
      .GetCarImagesByCarId(carId)
      .subscribe((params) => (this.carImages = params.data));
  }
}

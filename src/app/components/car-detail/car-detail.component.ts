import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/dto/carDetail';
import { CarImage } from 'src/app/models/entity/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import {CarDetailService} from '../../services/car-detail.service';
import {RentalService} from '../../services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {

  cars: CarDetail[];
  carImages: CarImage[];

  constructor(
    private carDetailService:CarDetailService,
    private carImageService: CarImageService,
    private rentalService:RentalService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
        this.getCarImagesByCarId(params['carId']);
      } else {
        console.log('Lütfen veri girin');
      }
    });
  }

  getCarDetailsByCarId(carId: number) {
    return this.carDetailService
      .getCarDetailsByCarId(carId)
      .subscribe((params) => (this.cars = params.data));
  }

  getCarImagesByCarId(carId: number) {
    console.log("selam knki")
    return this.carImageService.GetCarImagesByCarId(carId).subscribe(
      (params) => {this.carImages = params.data, console.log(this.carImages)}
    );
  }

  getCurrentSliderImageClass(sliderImage: CarImage): string {
    if (this.carImages[0] === sliderImage) {
      return 'carousel-item active';
    }

    return 'carousel-item';
  }
}

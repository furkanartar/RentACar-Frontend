import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CarDetail } from 'src/app/models/dto/carDetail';
import { Brand } from 'src/app/models/entity/brand';
import { CarImage } from 'src/app/models/entity/carImage';
import { Color } from 'src/app/models/entity/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  colors: Color[];
  brands: Brand[];
  carImage: CarImage;
  dataLoaded = false;

  filterText: string = '';
  brandId: number;
  colorId: number;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarDetailsByBrandIdandColorId(
          params['brandId'],
          params['colorId']
        );
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCarDetails();
        this.getColors();
        this.getBrands();
      }
    });
  }

  getCarDetailsByBrandIdandColorId(brandId: number, colorId: number) {
    this.carService
      .getCarDetailsByBrandIdAndColorId(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getColors() {
    this.colorService
      .getColors()
      .subscribe((Response) => (this.colors = Response.data));
  }

  getBrands() {
    this.brandService
      .getBrands()
      .subscribe((Response) => (this.brands = Response.data));
  }

  getCarDetails() {
    this.carService.getAllCarDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}

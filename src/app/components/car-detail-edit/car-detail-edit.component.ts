import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../../models/entity/car';
import {ToastrService} from 'ngx-toastr';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car-detail-edit',
  templateUrl: './car-detail-edit.component.html',
  styleUrls: ['./car-detail-edit.component.css']
})
export class CarDetailEditComponent implements OnInit {

  carUpdateForm: FormGroup;
  carModel: Car;
  carId:number;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.createCarUpdateForm();
        this.carId= params['carId'];
      } else {
        console.log('Tekrar deneyin');
      }
    });
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      Id: [this.carId, Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  updateCar() {
    this.carModel = this.carUpdateForm.value;

    this.carService.update(this.carModel).subscribe(
      response=> this.toastrService.success(response.message, "Başarılı"),
      responseError => this.toastrService.error(responseError.error.message, "Başarısız"))
  }














  // constructor(private activatedRoute: ActivatedRoute) {}
  //
  // ngOnInit(): void {
  //   //
  // }
  //

}

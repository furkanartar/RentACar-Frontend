import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/entity/car';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  carModel: Car;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService:CarService,
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCar() {
    this.carModel = this.carAddForm.value;

    this.carService.add(this.carModel).subscribe(
      response=> this.toastrService.success(response.message, "Başarılı"),
      responseError => this.toastrService.error(responseError.error.message, "Başarısız"))
  }
}

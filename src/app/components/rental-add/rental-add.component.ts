import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/entity/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup;
  rentalModel: Rental;
  carId:number;

  constructor(
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private activatedRoute:ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = params['carId'];
        this.createRentalAddForm(this.carId);
      } else {
        this.toastrService.error("Lütfen tekrar deneyin", "Hata");
      }
    });
  }

  createRentalAddForm(carId:number) {
    this.rentalAddForm = this.formBuilder.group({
      carId: [carId, Validators.required],
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      enable: [false, Validators.required]
    });
  }

  addRental() {
    if (this.rentalAddForm.valid) {
      this.rentalModel = Object.assign({}, this.rentalAddForm.value);
      this.rentalService.add(this.rentalModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, "Başarılı. Ödeme bekleniyor.");
        },
        (responseError) => {
          this.toastrService.error(responseError.message, 'Başarısız');
        }
      );
    } else {
      this.toastrService.error('Form eksik', 'Başarısız');
    }
  }
}

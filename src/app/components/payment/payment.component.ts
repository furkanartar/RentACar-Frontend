import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/entity/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {

  result: Rental[];
  creditCardAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.createCreditCardAddForm();
        this.getPaymentMethodNotAddedByCarId(params['carId']);
      } else {
        this.toastrService.error(
          'Lütfen ödeme işlemini tekrar deneyin.',
          'Başarısız'
        );
      }
    });
  }

  createCreditCardAddForm() {
    this.creditCardAddForm = this.formBuilder.group({
      creditCardNumber: ['', Validators.required],
      expiration: ['', Validators.required],
      CardSecurityNumber: ['', Validators.required],
    });
  }

  getPaymentMethodNotAddedByCarId(carId: number) {
    this.rentalService.getPaymentMethodNotAddedByCarId(carId).subscribe(response=>{
      this.result = response.data;
    })
  }

  add() {
    if (this.creditCardAddForm.valid) {
      let creditCardModel = Object.assign({}, this.creditCardAddForm.value);

      if (this.result.length >= 0) {
        this.paymentService.Add(creditCardModel).subscribe(
          (response) => {
            this.toastrService.success(response.message, 'Başarılı');
          },
          (responseError) => {
            if (responseError.error.Errors.length > 0) {
              for (let i = 0; i < responseError.error.Errors.length; i++) {
                this.toastrService.error(
                  responseError.error.Errors[i].ErrorMessage,
                  'Doğrulama hatası'
                );
              }
            }
          }
        );
      } else {
        this.toastrService.error('Formunuz eksik', 'Dikkat');
      }

    } else {
      this.toastrService.error("Zaten Ödeme İşlemi Yapılmış", "Hata");
    }
  }
}

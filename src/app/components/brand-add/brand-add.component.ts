import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Brand} from '../../models/entity/brand';
import {BrandService} from '../../services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;
  brandModel: Brand;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }


  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  addBrand() {
    this.brandModel = this.brandAddForm.value;

    this.brandService.add(this.brandModel).subscribe(
      response=> this.toastrService.success(response.message, "Başarılı"),
        responseError => this.toastrService.error(responseError.error.message, "Başarısız"))
  }
}

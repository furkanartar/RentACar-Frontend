import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Color} from '../../models/entity/color';
import {ColorService} from '../../services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm: FormGroup;
  colorModel: Color;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService : ColorService,
  ) {}

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
  }

  addColor() {
    this.colorModel = this.colorAddForm.value;

    this.colorService.add(this.colorModel).subscribe(
      response=> this.toastrService.success(response.message, "Başarılı"),
      responseError => this.toastrService.error(responseError.error.message, "Başarısız"))
  }
}

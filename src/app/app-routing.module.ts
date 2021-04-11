import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import {BrandAddComponent} from './components/brand-add/brand-add.component';
import {ColorAddComponent} from './components/color-add/color-add.component';
import {CarAddComponent} from './components/car-add/car-add.component';
import {CarDetailEditComponent} from './components/car-detail-edit/car-detail-edit.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cars', component: CarComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'rentals', component: RentalComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'brands/add', component: BrandAddComponent },
  { path: 'cars/add', component: CarAddComponent },
  { path: 'colors/add', component: ColorAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'cars/edit/:carId', component: CarDetailEditComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/:carId', component: CarDetailComponent },
  { path: 'cars/:brandId/:colorId', component: CarComponent },
  { path: 'rentals/add/:carId', component: RentalAddComponent },
  { path: 'payments/:carId', component: PaymentComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

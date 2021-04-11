import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/dto/loginModel';
import { SingleResponseModel } from '../models/response/singleResponseModel';
import { TokenModel } from '../models/response/tokenModel';
import {RegisterModel} from '../models/dto/registerModel';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44304/api/auth/';
  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService) { }

  login(loginModel: LoginModel) {
    let newPath = this.apiUrl + '/auth/login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      loginModel
    );
  }

  register(registerModel: RegisterModel) {
    let newPath = this.apiUrl + '/auth/register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      registerModel
    );
  }

  isAuthenticated() {
    if (this.localStorageService.getLocalStorage('token')) {
      return true;
    } else {
      return false;
    }
  }
}

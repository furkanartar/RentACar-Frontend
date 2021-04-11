import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isVerified: boolean = false;
  userName:string
  claim:string;

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.IsUserVerified();
    if(this.isVerified){
      this.getUserName();
      this.getUserClaim();
    }
  }

  IsUserVerified() {
    if (this.authService.isAuthenticated()) {
      this.isVerified = true;
    } else {
      this.isVerified = false;
    }
  }

  getUserName() {
    this.userName = this.localStorageService.getUserNameDecodeToken();
  }

  getUserClaim() {
    this.claim = this.localStorageService.getClaimsDecodeToken();
  }

  logOut() {
    this.localStorageService.removeLocalStorage("token");
    this.toastrService.info("You logged out", "info");
    this.ngOnInit();
  }
}

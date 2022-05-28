import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  loggedIn=false;

  constructor(private authService: AuthenticationService, private modalService:ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  logOut() {
    this.authService.logOut();
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

}

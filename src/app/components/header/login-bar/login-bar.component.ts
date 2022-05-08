import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)
    ) {
      //this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  logOut() {
    this.authService.logOut();
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

}

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
 /* //viejo: cpaz hay que borrar
  checkLogin() {
    (this.authService.IniciarSesion({email:this.username, password:this.password}).subscribe(
      data => {
        //this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )
    );
  }
*/
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


/*
checkLogin() {
  (this.authService.authenticate(this.username, this.password).subscribe(
    data => {
      //this.router.navigate([''])
      this.invalidLogin = false
    },
    error => {
      this.invalidLogin = true
    }
  )
  );
}
*/
  logOut() {
    this.authService.logOut();
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

}

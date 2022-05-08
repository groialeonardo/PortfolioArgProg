import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//reveer
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-deletebtn',
  templateUrl: './deletebtn.component.html',
  styleUrls: ['./deletebtn.component.css']
})
export class DeletebtnComponent implements OnInit {

  @Output() onBbtnClick = new EventEmitter();

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {

  }

  onClick(){

    this.onBbtnClick.emit();

  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-editbtn',
  templateUrl: './editbtn.component.html',
  styleUrls: ['./editbtn.component.css']
})
export class EditbtnComponent implements OnInit {

  @Input() border:string= "";

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

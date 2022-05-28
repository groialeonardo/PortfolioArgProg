
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-btnshowexp',
  templateUrl: './btnshowexp.component.html',
  styleUrls: ['./btnshowexp.component.css']
})
export class BtnshowexpComponent implements OnInit {

  @Input() text:string= "";
  @Input() color:string= "";
  @Input() bgcolor:string= "";
  @Input() border:string= "";
  @Output() onBbtnClick = new EventEmitter();

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.onBbtnClick.emit();
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

}


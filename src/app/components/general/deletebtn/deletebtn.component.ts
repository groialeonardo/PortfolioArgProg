import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

//reveer
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-deletebtn',
  templateUrl: './deletebtn.component.html',
  styleUrls: ['./deletebtn.component.css']
})
export class DeletebtnComponent implements OnInit {
  @Input() needConfirm=true;
  displayStyle = "none";
  @Output() onBbtnClick = new EventEmitter();

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.needConfirm){
      this.openPopup();
    }else{
      this.onBbtnClick.emit();
    }
  }
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";    
  }

  onConfirm(){
    this.onBbtnClick.emit();
    this.closePopup();    
  }


  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.onBbtnClick.emit();
  }

}

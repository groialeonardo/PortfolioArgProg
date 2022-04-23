import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deletebtn',
  templateUrl: './deletebtn.component.html',
  styleUrls: ['./deletebtn.component.css']
})
export class DeletebtnComponent implements OnInit {

  @Output() onBbtnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

    this.onBbtnClick.emit();

  }

}

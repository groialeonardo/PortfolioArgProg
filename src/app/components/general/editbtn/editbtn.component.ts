import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editbtn',
  templateUrl: './editbtn.component.html',
  styleUrls: ['./editbtn.component.css']
})
export class EditbtnComponent implements OnInit {

  @Input() border:string= "";

  @Output() onBbtnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

    this.onBbtnClick.emit();

  }
}

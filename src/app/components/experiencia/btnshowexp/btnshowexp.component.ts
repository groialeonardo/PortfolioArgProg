/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btnshowexp',
  templateUrl: './btnshowexp.component.html',
  styleUrls: ['./btnshowexp.component.css']
})
export class BtnshowexpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnshowexp',
  templateUrl: './btnshowexp.component.html',
  styleUrls: ['./btnshowexp.component.css']
})
export class BtnshowexpComponent implements OnInit {

  @Input() text:string= "";
  @Input() color:string= "";
  @Output() onBbtnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){

    this.onBbtnClick.emit();

  }

}


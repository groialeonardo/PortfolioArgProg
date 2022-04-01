import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { Exp } from '../../../Interfaces/Exp';
import { EXPS } from '../../../mock-exps';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  @Input() exp:Exp = EXPS[0];
  @Output() onDeleteEvent:EventEmitter<Exp> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(exp:Exp) {
    this.onDeleteEvent.emit(exp);

  }

}

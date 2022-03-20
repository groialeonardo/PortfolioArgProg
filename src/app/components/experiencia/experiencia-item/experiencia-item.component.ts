import { Component, OnInit, Input } from '@angular/core';

import { Exp } from '../../../Exp';
import { EXPS } from '../../../mock-exps';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  @Input() exp:Exp = EXPS[0];

  constructor() { }

  ngOnInit(): void {
  }

}

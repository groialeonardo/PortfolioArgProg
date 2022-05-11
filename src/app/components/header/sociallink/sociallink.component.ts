import { Component, Input, OnInit } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-sociallink',
  templateUrl: './sociallink.component.html',
  styleUrls: ['./sociallink.component.css']
})
export class SociallinkComponent implements OnInit {

  @Input() persona:IPersona = new Persona();

  constructor() { }

  ngOnInit(): void {
  }

}

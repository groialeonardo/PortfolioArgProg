import { Component, OnInit } from '@angular/core';
import { ITecno } from 'src/app/Interfaces/ITecno';
import { TECNOS } from 'src/app/mock-tecno';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  tecnos:ITecno[] = TECNOS;

  constructor() { }

  ngOnInit(): void {
  }

}

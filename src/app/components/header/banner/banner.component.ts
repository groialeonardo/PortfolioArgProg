import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() persona:IPersona = new Persona();
  @Input() showEdit=false;

  @Output() newBannerImg: any[] = [];
  @Output() newBannerImgEvent:EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  cargarImagen(event: any) {
    let archivos = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.newBannerImg[0]=reader.result;
      this.newBannerImgEvent.emit(reader.result)
    }
  }

}

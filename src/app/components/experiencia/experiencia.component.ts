import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/_modal';
import { IExp } from 'src/app/Interfaces/IExp';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exps:IExp[] = [];
  subcription?:Subscription;
  showAddExp:boolean = false;

  constructor(private experienciaService:ExperienciaService,
    private authService: AuthenticationService,
    private modalService: ModalService) { }

  ngOnInit(): void {

    this.experienciaService.getExps().subscribe((expscallback)=>(
      this.exps=expscallback
      ));
  }

  addExp(exp:IExp) {

    this.experienciaService.addExp(exp).subscribe((t)=>{
      this.exps.push(t);
      alert("Se ha añadido una nueva Experiencia");
      this.showAddExp = false;
    })

  }

  editExp(exp:IExp) {

    this.experienciaService.updateExp(exp).subscribe(()=>{
      alert("Los datos se han guardado satisfactoriamente");
    });
  }

  deleteExp(exp:IExp) {
    this.experienciaService.deleteExps(exp).subscribe(()=>(
      this.exps = this.exps.filter(t => t.id !==exp.id ))
    );
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-iniciar-session',
  templateUrl: './iniciar-session.component.html',
  styleUrls: ['./iniciar-session.component.css']
})
export class IniciarSessionComponent implements OnInit {

  form:FormGroup;
  @Output() onCloseEvent:EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder:FormBuilder, private authService:AuthenticationService) {
    this.form=this.formBuilder.group({

      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    }
    )
   }


  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email')
  }

  get Password(){
    return this.form.get('password')
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.authService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("Datos de inicio de sesion:" + JSON.stringify(data));
      if(data)
      {
        alert(" Se ha iniciado sesión satisfactoriamente")
      }
      //this.ruta.navigate([])
    })
  }

  onClose(){
    this.onCloseEvent.emit();
  }


}

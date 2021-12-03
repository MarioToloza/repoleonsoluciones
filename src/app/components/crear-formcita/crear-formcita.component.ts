import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formcita } from 'src/app/models/formcita';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-crear-formcita',
  templateUrl: './crear-formcita.component.html',
  styleUrls: ['./crear-formcita.component.css']
})
export class CrearFormcitaComponent implements OnInit {

  formcita: FormGroup;
  titulo = ' Crear Cita ';
  boton='Crear';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService,
    private _formcitaService: ServiceService, private aRouter: ActivatedRoute) {

    this.formcita = this.fb.group({
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
      servicio: ['', Validators.required],
      observaciones: ['', Validators.required],
      tecnico: ['', Validators.required],

    })

    this.id = this.aRouter.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.enEditar();
  }

  agregarCita() {

    const FORMCITA: Formcita = {
      id_cita: this.formcita.get('')?.value,
      fecha_cita: this.formcita.get('fecha')?.value,
      estado_cita: this.formcita.get('estado')?.value,
      servicio: this.formcita.get('servicio')?.value,
      observaciones: this.formcita.get('observaciones')?.value,
      tecnico: this.formcita.get('tecnico')?.value,
    }
    if (this.id !== null) {
      // Editamos cita
      this._formcitaService.editarFormcita(this.id, FORMCITA).subscribe(data => {
        this.toastr.success('Cita Editada con exito', 'Cita Editada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.formcita.reset();
      })

    } else {
      //  Agregar Cita
      console.log(FORMCITA);
      this._formcitaService.guardarFormcita(FORMCITA).subscribe(data => {
        this.toastr.success('Cita agregada con Exito', 'Cita Registrada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.formcita.reset();
      })
    }
  }

  enEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Cita';
      this.boton='Editar';
      this._formcitaService.obtenerFormcita(this.id).subscribe(data => {
        this.formcita.setValue({
          fecha: data.fecha_cita,
          estado: data.estado_cita,
          servicio: data.servicio,
          observaciones: data.observaciones,
          tecnico: data.tecnico,
        })
      })
    }
  }
}

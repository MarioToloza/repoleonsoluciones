import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Formcita } from 'src/app/models/formcita';
import { ServiceService } from 'src/app/services/service.service';



@Component({
  selector: 'app-listar-formcita',
  templateUrl: './listar-formcita.component.html',
  styleUrls: ['./listar-formcita.component.css']
})
export class ListarFormcitaComponent implements OnInit {
  listFormcitas: Formcita[] = [];

  constructor(private _formcitaService: ServiceService, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.obtenerFormcitas();

  }

  obtenerFormcitas(){
    this._formcitaService.getformcita().subscribe(data =>{
      console.log(data);
      this.listFormcitas=data;
    }, error => {
      console.log(error);
    })
  }

  eliminarFormcita(id: any){
    this._formcitaService.eliminarFormcita(id).subscribe(data =>{
      this.toastr.error('Esta Cita fue eliminada', 'Cita eliminada');
      this.obtenerFormcitas();
       },error=>{
         console.log(error);
       })
  }

  obtenerFormcita(){

  }

}

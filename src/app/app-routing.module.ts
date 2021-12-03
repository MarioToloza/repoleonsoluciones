import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Componentes nuestros
import { ListarFormcitaComponent } from './components/listar-formcita/listar-formcita.component';
import { CrearFormcitaComponent } from './components/crear-formcita/crear-formcita.component';

const routes: Routes = [
  {path: '', component:ListarFormcitaComponent},
  {path: 'crear-formcita', component:CrearFormcitaComponent},
  {path: 'editar-formcita/:id', component:CrearFormcitaComponent},
  {path: '**',redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

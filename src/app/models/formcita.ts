import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Form } from "@angular/forms";

export class Formcita{


    _id?:number;
    id_cita:Number;
    fecha_cita:String;
    estado_cita:String;
    servicio:String;
    observaciones:String;
    tecnico:String;


    constructor (id_cita:number,fecha_cita:String,estado_cita:String,servicio:String,observaciones:String,tecnico:String){
        this.id_cita=id_cita;
        this.fecha_cita=fecha_cita;
        this.estado_cita=estado_cita;
        this.servicio=servicio;
        this.observaciones=observaciones;
        this.tecnico=tecnico;

    }
}
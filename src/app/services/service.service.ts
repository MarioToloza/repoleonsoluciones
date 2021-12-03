import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formcita } from '../models/formcita';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'api/formcitas/';

  constructor(private http: HttpClient) { }
  getformcita(): Observable<any> {
    return this.http.get(this.url);

  }

  eliminarFormcita(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarFormcita(formcita: Formcita): Observable<any> {
    return this.http.post(this.url, formcita);
  }

  obtenerFormcita(id: String): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarFormcita(id: string, formcita: Formcita): Observable<any> {
    return this.http.put(this.url + id, formcita);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConductores } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Iconductor } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }

  listarConductores():Observable<IConductores>{
    return this.httpclient.get<IConductores>(`${environment.apiUrl}/conductores`);
  }

  CrearConductor(newConductor: Iconductor): Observable<Iconductor>{
    return this.httpclient.post<IConductores>(`${environment.apiUrl}/conductores`, newConductor);
  }

}

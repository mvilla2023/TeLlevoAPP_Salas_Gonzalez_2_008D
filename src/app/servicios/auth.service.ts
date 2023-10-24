import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConductores} from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  GetAllConductores():Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${environment.apiUrl}/usuarios`);
  }

  GetConductorById(codigo: any):Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }


  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }

  onlogout(){
    this.router.navigate(['/login'])
  }


}
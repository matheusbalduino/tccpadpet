import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService extends BaseService {

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {
    super();
    this.isLoggedIn = sessionStorage.getItem('logged') === 'true'? true : false;
   }

   login( user:any ):Observable<any>{
    return this.http.post( `${this.url}/user/login`, user, this.getHeaderJson()).pipe(
      map((response: any ) =>{
        if(response.credentials.token){
          sessionStorage.setItem('logged', 'true');
          this.isLoggedIn = true;
        }
        return response || null;
      }),
      catchError((error) => error)
    )
   }
}

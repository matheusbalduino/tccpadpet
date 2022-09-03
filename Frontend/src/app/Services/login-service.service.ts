import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   login( user:any ):Observable<any>{
    return this.http.post( `${this.url}/user/login`, user, this.getHeaderJson()).pipe(
      map(this.extractData),
      catchError((error) => (error))
    )
   }
}

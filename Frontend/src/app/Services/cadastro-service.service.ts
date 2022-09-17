import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map } from 'rxjs';
import { BaseService } from './base-service.service';

@Injectable()
export class CadastroService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   getDataUsers(): Observable<any>{
    return this.http.get<any>( `${this.url}/users`, this.getHeaderJson()).pipe(
      map(this.extractData),
      catchError((error) => (error))
    )
   }

   postDataUser(user: string, value: any): Observable<any>{
    return this.http.post<any>( `${this.url}/${user}/store`, value ,this.getHeaderJson()).pipe(
      map(this.extractData),
      catchError((error) => throwError(error))
    )
   }

   updateUser(user: string, value: any): Observable<any>{
     return this.http.put(`${this.url}/${user}/update`, value, this.getHeaderJson()).pipe(
      map(this.extractData),
      catchError((error) => throwError(error))
     )
   }

   getUser(user: string): Observable<any>{
    return this.http.get(`${this.url}/${user}/show`,this.getHeaderJson()).pipe(
     map(this.extractData),
     catchError((error) => throwError(error))
    )
  }

}

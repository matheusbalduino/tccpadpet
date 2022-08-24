import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError,map } from 'rxjs';
import { BaseService } from './base-service.service';

@Injectable()
export class CadastroService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   getDataUsers(): Observable<any>{
    return this.http.get<any>( `${this.url}/users`, this.getHeaderJson()).pipe(
      map(this.extractData),
      catchError((error) => throwError(error))
    )
   }

   postDataUser(value: any): Observable<any>{
    return this.http.post<any>( `${this.url}/users`, value ,this.getHeaderJson()).pipe(
      map(this.extractData),
      catchError((error) => throwError(error))
    )
   }
}

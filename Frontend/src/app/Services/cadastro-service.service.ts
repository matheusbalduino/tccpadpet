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
    console.log('cheguei aqui')

    return this.http.get<any>( `${this.url}/users`, this.getHeaderJson()).pipe(
      map(this.extractData),
      catchError((error) => throwError(error))
    )
   }
}

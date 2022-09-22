import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Message } from '../interfaces/messages';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

   sendMessage(message:Message): Observable<any>{
    return this.http.post(`${this.url}/message/store`, message, this.getHeaderJson()).pipe(
     map(this.extractData),
     catchError((error) => throwError(error))
    )
  }



}

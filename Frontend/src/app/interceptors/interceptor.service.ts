import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
  token: string;
  constructor() {
    this.token = sessionStorage.getItem('token') || ''
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req)

    // req = req.clone({
    //   setHeaders:{
    //     Authorization: `Bearer ${this.token}`
    //   }
    // })

    return next.handle(req)

  }


}

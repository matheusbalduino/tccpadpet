import { SlicePipe } from '@angular/common';
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
    const end_point = req.url.slice(req.url.indexOf('/user/login'), req.url.length)
    if(end_point !== '/user/login' ){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${this.token}`
        }
      })
    }

    console.log('req', req)
    return next.handle(req)
  }
}

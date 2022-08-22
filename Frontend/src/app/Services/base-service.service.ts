import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export abstract class BaseService {

  protected url = environment.baseUrl;

  protected getHeaderJson(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  protected extractData(response: any){
    return response || null;
  }

}

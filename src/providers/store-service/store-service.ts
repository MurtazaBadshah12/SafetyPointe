import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceProvider, HttpRequestModel } from './../httpservice/httpservice';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
/*
  Generated class for the StoreServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreServiceProvider {
  HttpRequestModel: HttpRequestModel = new HttpRequestModel();

  constructor(public http: HttpClient, private httpservice: HttpServiceProvider) {
    console.log('Hello StoreServiceProvider Provider');
  }

  getPosts(limit): Observable<any> {

    this.HttpRequestModel.reset();
    this.HttpRequestModel.url = 'photos';
    this.HttpRequestModel.method = 'GET';
    this.HttpRequestModel.header = 'Auth';

    return this.httpservice.init(this.HttpRequestModel).map(response => response);
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class HttpRequestModel {
  header: string;
  url: string;
  method: string;
  params: any;
  body: any;

  reset() {
    this.header = '';
    this.url = '';
    this.method = '';
    this.params = '';
    this.body = '';
  }
}

@Injectable()
export class HttpServiceProvider {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: Http) { }

  /**
   * Before any Request.
   */
  private beforeRequest(): void {
    // this.blockUIService.displayLoader();
  }

  /**
   * After any request.
   */
  // private afterRequest(): void {
  //   // this.blockUIService.hideLoader();
  // }

  /**
   * Request options.
   * @param options
   * @returns {RequestOptionsArgs}
   */
  private requestOptions(httpRequest: HttpRequestModel, options?: RequestOptions): RequestOptions {
    options = new RequestOptions();

    options.body = httpRequest.body;
    options.params = httpRequest.params;
    options.method = httpRequest.method;

    options.headers = this.headers;

    // if (options.headers.has('X-BGK-AuthKey') !== false) {
    //   options.headers.set('X-BGK-AuthKey', this.LocalStorage.getItem('company_url') + '.gbslms.net');
    // }

    // if (httpRequest.header !== 'NoAuth') {
    // let user;
    // user = this.AuthUserIdentity.getIdentity();
    // if (options.headers.has('Authorization') === false) {
    //   options.headers.append('Authorization', user.authToken);
    // }
    // }
    return options;
  }

  init(httpRequest: HttpRequestModel): Observable<any> {
    let options;
    options = this.requestOptions(httpRequest);
    return this.request(this.baseUrl + httpRequest.url, options);
  }

  request(url: string, option: RequestOptions): Observable<any> {
    this.beforeRequest();

    return this.http.request(url, option)
      .map(response => response.json())
      .catch(this.onCatch.bind(this))
      .do(
        (res: Response) => { this.onSuccess(res); },
        (error: any) => { this.onError(error); }
      );
  }

  /*
   * onSuccess
   * @param res
   */
  private onSuccess(res: Response) {
    // this.blockUIService.hideLoader();
    return res;
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    // this.blockUIService.hideLoader();
    return Observable.throw(error);
  }

  /**
   * onError
   * @param error
   */
  private onError(error: any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.status === 'error' ? body.data : JSON.stringify(body);
      // this.messageService.sendMessage(err);
      return Observable.throw(err);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    // this.messageService.sendMessage(errMsg);
    return Observable.throw(errMsg);
  }
}

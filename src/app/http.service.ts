import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Constants } from './constants';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  setHeaders() {
    var headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')

    return headers
  }

  public getContainerList() {
    return this.httpClient.get(Constants.BaseUrl + Constants.ListContainer)
  }

}
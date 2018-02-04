import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Constants } from './constants';
import { ListContainers, StartContainer, StopContainer, ResponseMessage } from './models';

@Injectable()
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  setHeaders() {
    var headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json; charset=UTF-8')

    return headers
  }

  public getContainerList() {
    return this._httpClient.get<ListContainers[]>(Constants.BaseUrl + Constants.ListContainer)
  }

  public startContainerByID(msg: StartContainer) {
    return this._httpClient.post<ResponseMessage>(
      Constants.BaseUrl + Constants.StartContainer,
      JSON.stringify(msg),
      {
        headers: this.setHeaders()
      }
    )
  }

  public stopContainerByID(msg: StopContainer) {  
    return this._httpClient.post(
      Constants.BaseUrl + Constants.StopContainer,
      JSON.stringify(msg),
      {
        headers: this.setHeaders()
      }
    )
  }
}
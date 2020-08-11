import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { BaseService } from './BaseService/base.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }


  getInitialList() {
    return new Promise((resolve, reject) => {
      try {
        let apiName = 'https://api.spacexdata.com/v3/launches?limit=100';
        this.getCall(apiName).subscribe((data) => {
          if (data != null && data != undefined) {
            resolve(data);
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        })
      } catch (error) {
        reject(error);
      }
    });
  }


}

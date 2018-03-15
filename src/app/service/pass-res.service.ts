import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PassResService {

  constructor(private http: HttpClient) { }
  sendMail(requestObject) {
    return this.http.post('api2/mail/send', requestObject);
  }
}

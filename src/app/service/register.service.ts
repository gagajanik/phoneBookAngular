import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }
  submitRegister (requestObject) {
    return this.http.post('api/createUser', requestObject);
  }
}


import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  auth(requestObject) {
    return this.http.post('api2/auth/login', requestObject);
  }
  seesionData() {
    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    if (sessionData) {
      return sessionData;
    } else {
      return '';
    }
  }
  logout() {
     this.http.get('api2/auth/logout');
    localStorage.clear();
  }

}

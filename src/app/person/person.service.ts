import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Person} from '../person';

@Injectable()
export class PersonService {
  name: String = '';
  lastName: String= '';
  phone: String= '';
  result: Person[];

  constructor(private http: HttpClient) {
    this.result = [];
  }

  addPerson (): Observable<any> {
    return this.http.post('api/createContact', {
      'name': this.name,
      'lastName': this.lastName,
      'phone' : this.phone
    });
  }

  goGet() {
   const promise = new Promise(( resolve , reject) => {
    return this.http.get('api/getAll')
      .toPromise()
      .then(res => {
        console.log(res);
        this.result = <Person[]> res;
        resolve();
        },
        msg => {
        reject(msg);
        }
        );
      });
   return promise;
  }
  goGetOb(): Observable<any> {
    return this.http.get('api/getAll');
  }
  getAll(): Observable<Person[]> {
    return this.http.get('api/getAll').map(res => {
      return this.result = <Person[]> res;
    });
  }
  getContactByPhone(phone): Observable<Person[]> {
      return this.http.get('api/getByPhone', {params: {'phone': phone}}).map(res => {
                return this.result = <Person[]> res;
      });
  }
    getContactByName(name): Observable<Person[]> {
        return this.http.get('api/getByName', {params: {'name': name}}).map(res => {
            return this.result = <Person[]> res;
        });
    }
    getContactByLastName(lastName): Observable<Person[]> {
        return this.http.get('api/getByLastName', {params: {'lastName': lastName}}).map(res => {
            return this.result = <Person[]> res;
        });
    }
    delteContact(id) {
      return this.http.delete('api/deleteContact', {params: {id: id}});
    }
    updateContact(id, name, lastName, phone) {
        return this.http.put('api/updateContact', {id: id, name: name, lastName: lastName, phone: phone});
    }
    updateStatus(status, id) {
        return this.http.put('api/updateStatus', {status: status, id: id});
    }

}

import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../person/person.service';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'rame';
  contact = {
    id : '',
    name : '',
    lastName : '',
    phone : ''
};
  sessData ;
  phone = '';
  name = '';
  lastName= '';
  constructor(public _ser: PersonService, private  auth: AuthService, private router: Router) { }

  ngOnInit() {
     this.sessData = this.sessionData();
     if (!this.sessData) {
       this.router.navigate(['/auth']);
     }


  }
  onKeyName(event: any) { // without type info
    this.contact.name = event.target.value;
    // this.lastName = event.target.value;
  }

  onKeyLastName(event: any) { // without type info
    // this.name = event.target.value;
    this.contact.lastName = event.target.value;
  }

  onKeyLastPhone(event: any) { // without type info
    // this.name = event.target.value;
    this.contact.phone = event.target.value;
  }

  onClick() {
    this._ser.name = this.contact.name;
    this._ser.lastName = this.contact.lastName;
    this._ser.phone = this.contact.phone;
    this._ser.addPerson().subscribe(res => {
     return this.getAll();
    });
  }
  goGet() {
    this._ser.goGet();
  }
  goGetOb() {
    this._ser.goGetOb().subscribe(res => {this._ser.result = res; });
  }

  getAll() {
    this._ser.getAll().subscribe();
  }
  getContactByPhone(phone, name, lastName) {
    if (phone !== '' && name === '' && lastName === '') {
      this._ser.getContactByPhone(phone).subscribe();
    }else if ( name !== '' && phone === '' && lastName === '') {
      this._ser.getContactByName(name).subscribe();
    }else if ( lastName !== '' && name === '' && phone === '') {
      this._ser.getContactByLastName(lastName).subscribe();
    } else if ( phone === '' && name === '' && lastName === '') {
      this.getAll();
    }
  }
  deleteContact(id) {
    this._ser.delteContact(id).subscribe();
    alert('მონაცემი წაიშალა!!!');
    this.getAll();
  }
  updateContact(id, name, lastName, phone) {
    this._ser.updateContact(id, name, lastName, phone).subscribe();
    alert('მონაცემები შეიცვალა');
  }
  sessionData() {
    return this.auth.seesionData();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/auth']);
  }

}

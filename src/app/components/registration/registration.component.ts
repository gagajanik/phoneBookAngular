import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../service/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regObj = {
    userName: '',
    password: '',
    userRole: ''
  };
  constructor(private _reg: RegisterService) { }

  ngOnInit() {
  }

  registerSubmit() {
   this._reg.submitRegister(this.regObj).subscribe(res => {
   });
  }

}

import { Component, OnInit } from '@angular/core';
import {PassResService} from '../../service/pass-res.service';


@Component({
  selector: 'app-pass-res',
  templateUrl: './pass-res.component.html',
  styleUrls: ['./pass-res.component.css']
})
export class PassResComponent implements OnInit {
 mailObj = {
   mail: '',
   pass: ''
}
  constructor(private passRess: PassResService) { }

  ngOnInit() {
  }

  sendMail() {
    this.passRess.sendMail(this.mailObj).subscribe();
  }
}

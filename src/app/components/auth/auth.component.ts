import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {PersonService} from '../../person/person.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    login = {
        userName: '',
        password: ''
    };
    sessData;
    constructor(private authService: AuthService, public _ser: PersonService, private router: Router) {

    }

    ngOnInit() {
        this.sessData = this.sessionData();
        if (this.sessData) {
            this.router.navigate(['/']);
        }
    }

    loginSubmit() {
        this.authService.auth(this.login).subscribe(res => {
            this.sessData = localStorage.setItem('sessionData', JSON.stringify(res));
            if (res['error']) {
                alert(res['error']);
            } else {
                this.router.navigate(['/']);
            }
        });
    }




    sessionData() {
        return this.authService.seesionData();
    }
}

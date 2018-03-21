import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { PersonService } from './person/person.service';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import {RoutingModule} from './routing/routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import { WowComponent } from './components/wow/wow.component';
import { PassResComponent } from './components/pass-res/pass-res.component';
import {PassResService} from './service/pass-res.service';
import { RegistrationComponent } from './components/registration/registration.component';
import {RegisterService} from "./service/register.service";


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    WowComponent,
    PassResComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [PersonService, AuthService, PassResService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

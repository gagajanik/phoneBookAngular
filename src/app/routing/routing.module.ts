import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from '../components/auth/auth.component';
import {MainComponent} from '../components/main/main.component';
import {WowComponent} from '../components/wow/wow.component';
import {PassResComponent} from "../components/pass-res/pass-res.component";
import {RegistrationComponent} from "../components/registration/registration.component";

const routes132: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'test',
    component: WowComponent
  },
  {
    path: 'passRess',
    component: PassResComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes132)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

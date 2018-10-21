import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateserviceComponent } from './createservice/createservice.component';
import {MyserviceComponent} from './myservice/myservice.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import { UpdatecustomerComponent } from './updateservice/updatecustomer/updatecustomer.component';
import {TestComponent} from '../app/test/test.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthGuard} from './auth/auth.guard';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createservice', component: CreateserviceComponent ,  canActivate: [AuthGuard]},
  { path: 'myservice', component: MyserviceComponent , canActivate: [AuthGuard]},
  { path: 'updateservice', component: UpdateserviceComponent , canActivate: [AuthGuard]},
  {path: 'updatecustomer' , component: UpdatecustomerComponent},
  {path: 'test' , component: TestComponent , canActivate: [AuthGuard]},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)] ,
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {

}

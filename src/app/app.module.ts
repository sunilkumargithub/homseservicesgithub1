import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateserviceComponent } from './createservice/createservice.component';
import { AppRoutingModule } from './app.routingmodule';
import { MyserviceComponent } from './myservice/myservice.component';
import { UpdateserviceComponent } from './updateservice/updateservice.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { UpdatecustomerComponent } from './updateservice/updatecustomer/updatecustomer.component';
import { RouterModule } from '@angular/router';
import { Header2Component } from './header2/header2.component';
import { TestComponent } from './test/test.component';
import { WriteComponent } from './test/write/write.component';
import { ReadComponent } from './test/read/read.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateserviceComponent,
    MyserviceComponent,
    UpdateserviceComponent,
    FooterComponent,
    UpdatecustomerComponent,
    Header2Component,
    TestComponent,
    WriteComponent,
    ReadComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule



  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

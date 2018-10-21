import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLoading = false;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
  this.isLoading = true;
this.authservice.getuser(form.value);
}
onsignup() {
  console.log('onsignup');
  this.router.navigate(['/signup']);
}
}

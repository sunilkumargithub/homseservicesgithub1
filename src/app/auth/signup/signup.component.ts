import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
responsemessage;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
 this.authservice.usersignupsub.subscribe((response) => this.responsemessage = response);
  }

signup(form: NgForm) {
  console.log('wfeneuwo');
if (form.invalid) {
  return;
}

this.authservice.postuser(form.value);
}
}

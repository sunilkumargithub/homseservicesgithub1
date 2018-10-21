import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrls: ['./createservice.component.css']
})
export class CreateserviceComponent implements OnInit {
 // today = new Date();
 createresponse;


  constructor(private customerservice: CustomerService) {

  }

  ngOnInit() {
this.customerservice.custresponsesub
.subscribe((response) => {this.createresponse = response; });



  }

onadd(f: NgForm) {
  console.log('requested service is' , f.value);
  if (f.invalid) {
return;
  }
 const a = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-IN', '+0530');

this.customerservice.postservice(f.value);
console.log('form values are', f.value);
f.resetForm();
}



}

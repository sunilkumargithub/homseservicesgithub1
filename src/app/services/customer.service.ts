import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerModel } from '../models/customer.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
custresponsesub = new Subject();
getcustomersub = new Subject<CustomerModel[]>();
custpostresponse;
getcustomer: CustomerModel[] = [];

constructor(private httpclient: HttpClient, private router: Router) { }

postservice(data: CustomerModel) {
this.httpclient.post('http://localhost:4000/customer' , data)
.subscribe((response) => {
  this.custpostresponse = 'Service requested!';
  this.custresponsesub.next(this.custpostresponse);
console.log('service data is ', response);
console.log('service data is ', this.custpostresponse);


}), this.custpostresponse = 'Something went wrong, try again';
this.custresponsesub.next(this.custpostresponse);
}






}

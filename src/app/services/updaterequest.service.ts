import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerModel } from '../models/customer.model';
import { Router } from '@angular/router';
import {HttpParams, HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdaterequestService {
customerupdaterequestsub = new Subject();
customerrequest = [];
  constructor(private router: Router, private httpclient: HttpClient) { }

  getcustomer(customer) {
this.customerrequest = customer;
this.customerupdaterequestsub.next([this.customerrequest]);

}
updatestatus(data) {
const id = data.id;
const params =  new HttpParams().append('_id' , id);
this.httpclient.put('http://localhost:4000/customer' , data, {params})
.subscribe((response) => {

});
}
}

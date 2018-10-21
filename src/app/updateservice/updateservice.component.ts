import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerModel } from '../models/customer.model';
import { Router } from '@angular/router';
import { UpdaterequestService } from '../services/updaterequest.service';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-updateservice',
  templateUrl: './updateservice.component.html',
  styleUrls: ['./updateservice.component.css']
})
export class UpdateserviceComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  getcustomerresponse = [];
  test  = [];
  constructor(private customerservice: CustomerService ,
   private httpclient: HttpClient,
  private router: Router,
  private updaterequestservice: UpdaterequestService
  ) { }

  ngOnInit() {
    this.httpclient.get<{customer: CustomerModel[]}>('http://localhost:4000/customer')
    .subscribe((response) => {
    this.getcustomerresponse = response.customer;

    });

  }

  updatecustomer(customer) {
this.updaterequestservice.getcustomer(customer);
window.scrollTo(0, 0);
  }


  deletecustomer(emp) {


   const params = new HttpParams().append('_id', emp._id);
     this.httpclient.delete('http://localhost:4000/customer' , {params})
    .subscribe((response) => {
     this.ngOnInit();
    });
    }

    downloadPdf() {
      const doc = new jspdf();
      const content = this.content.nativeElement;
      doc.fromHTML(content.innerHTML, 1, 1);
doc.save('report .pdf');
    }


      }


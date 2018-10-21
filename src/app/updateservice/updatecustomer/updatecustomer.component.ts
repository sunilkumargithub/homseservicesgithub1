import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UpdaterequestService } from '../../services/updaterequest.service';
import { CustomerModel } from '../../models/customer.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as jspdf from 'jspdf';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
customerupdate = [];
subscription: Subscription;
  constructor(
    private router: Router,
    private updaterequestservice: UpdaterequestService
  ) { }

  ngOnInit() {
     this.updaterequestservice.customerupdaterequestsub.subscribe((cus: any[]) => {
      this.customerupdate = cus;

    });


  }
  downloadpdf() {

       const doc = new jspdf();
       const content = this.content.nativeElement;
       console.log('nativeelement output' , content.innerHTML);
       doc.fromHTML(content.innerHTML , 10, 10 , { 'width': 190});
doc.save('report .pdf');
  }

  update(form: NgModel){
console.log('update customer are ', form.value);
this.updaterequestservice.updatestatus(form.value);
  }

}

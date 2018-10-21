import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {
  userisauthenticated = false;
private authlisternersubj: Subscription;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authlisternersubj = this.authservice.getauthstatuslistener().subscribe((isauthenticated) => {
this.userisauthenticated = isauthenticated;
    });
  }


  ngOnDestroy() {
this.authlisternersubj.unsubscribe();
  }

  onlogout(){
    this.authservice.onlogout();
  }
}

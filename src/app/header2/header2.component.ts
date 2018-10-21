import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../services/responsive.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  isMobile: boolean;
  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.onResize();
  }


  onResize() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      console.log('header status' , isMobile);
      this.isMobile = isMobile;
    });
  }
}

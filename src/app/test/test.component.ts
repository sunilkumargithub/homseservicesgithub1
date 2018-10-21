import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  likeChangednumber;
  dislikeChangednumber;
  constructor() { }

  ngOnInit() {
  }
  likeChanged(number) {
this.likeChangednumber = number;
  }
  dislikeChanged(number) {
    this.dislikeChangednumber = number;
  }
}

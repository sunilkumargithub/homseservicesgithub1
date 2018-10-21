import { Component, OnInit , Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
likes = 0;
dislikes = 0;
@Output() likeChanged =  new EventEmitter<any>();
@Output() dislikeChanged =  new EventEmitter<any>();
  constructor() { }



  ngOnInit() {
  }
  change(value) {
    if (value === 'like') {
this.likes = (this.likes + 1);
this.likeChanged.emit(this.likes);

    }
    if (value === 'dislike') {
      this.dislikes = (this.dislikes + 1);
      this.dislikeChanged.emit(this.dislikes);
          }

}

}

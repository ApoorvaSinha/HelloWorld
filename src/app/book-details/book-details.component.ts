import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  //bookData=""
  //@Input('bookData') bookName: any;
  @Input() bookData='';
  @Output() eventEmitter=new EventEmitter();

  myevent(){
       this.eventEmitter.emit("Book added successfully!!");
  }

  constructor() { }

  ngOnInit(): void {
  }

}

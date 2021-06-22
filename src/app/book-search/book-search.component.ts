import { Component, OnInit,EventEmitter, Output,Input} from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  result:boolean=false;
  @Input() searchBook="";
  @Output() eventEmitter2=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  searchevent(){
    let msg="Book Found!!";
    const Books=['Java Core','Spring Framework 5.0','Angular 10.0','HTML/CSS']
        
    this.result=Books.includes(this.searchBook);
     if(this.result){
      msg="Book Found!!";
     }
    else{
      msg="Book Not Found!!";
    }
    this.eventEmitter2.emit(msg);
}
}

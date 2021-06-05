import { Component, OnInit,EventEmitter, Output,Input} from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

 
  @Input() searchBook="";
  @Output() eventEmitter2=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  searchevent(){
    const msg="Book Found!!";
    /*Books=['Java Core','Spring Framework 5.0','Angular 10.0','HTML/CSS']
    result:boolean=false;
    
    result=Books.includes(searchBook);
    if(result===true)
      msg="Book Found!!"
    }
    else{
      msg="Book Not Found!!"
    }*/
    this.eventEmitter2.emit(msg);
}
}

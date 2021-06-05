import { Injectable } from '@angular/core';
import { delay } from "rxjs/operators";
import { Book } from './book';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {

  constructor() { }

  getBookDetail() {
    return [
      { "BookName": "Angular 8", "BookAuthor": "John Doe" },
      { "BookName": "Angular 9", "BookAuthor": "Christine Nomota" },
      { "BookName": "Angular 10", "BookAuthor": "Derek Smith" },
    ];
  }

  private bookList: Book[] = [{
    bookName: "Core Java",
    bookAuthor: "Bill willis"
  },
  {
    bookName: "Spring 5.0",
    bookAuthor: "John Doe"
  },
  {
    bookName: "Angular 10.0",
    bookAuthor: "Stanley Smith"
  },]

  getBookInfo():Observable<Book[]>
  {
    console.log("Book Detail Service is called!!!")
    return of(this.bookList).pipe(delay(5000));
  }

}

import { Component, Input } from '@angular/core';
import { Book } from './book';
import { BookDetailService } from './book-detail.service';
import { BookProcessService } from './book-process.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="Learn Angular 10.0"
  bname="Type Book Name here!!"
  projectTitle = "Book Application";
  projectSearch="Search Book";
  mycolor = "black"
  mycolor2="blue"
  //status=true;
  pageHeader: string = "Student Details";
  FirstName: string = "Apoorva";
  LastName: string = "Sinha";
  Branch: string = "CSE";
  Mobile: string = "9876543212";
  Gender: string = "Female";
  Age: string = "22";
  ColumnSpan: number = 2;
  message="";
  msg="";
  classTomato: string | undefined;
  checkStatus:boolean=false;
  public bookName="Learn Java 2.0";

  price=543
  today:number=Date.now();
  data=6;

  // showData($event: any) interpolation
  showData(data:string) {
    // alert("Button is clicked")
   // console.log($event)
   // interpolatio this.message="This is generated via button click"
   this.message=data.toUpperCase();
   //this.classTomato="messageClass1";
  }

  searchResult(data2:string){
    this.msg=data2.toUpperCase();
  }
  
  /*bookname="Angular 10.0"
  constructor(private bkservice:BookProcessService){
  
  }
  ngOnInit():void{
    this.bookname=this.bkservice.processData(this.bookname);
  }*/
  
  /*bookDetail:Array<{"BookName":string,"BookAuthor":string}>=[]
  constructor(private bkdetail:BookDetailService){

  }
  ngOnInit():void{
   this.bookDetail=this.bkdetail.getBookDetail();
  }*/

  bookInfo:Book[] | undefined;
  constructor(private bkinfo:BookDetailService){
      
  }
  ngOnInit():void{
    this.bkinfo.getBookInfo().subscribe(booklist=>this.bookInfo=booklist);
  }

}


import { Component } from '@angular/core';
import { BookService } from '../shared/book.service';
//pipes: | lowercase, uppercase, titlecase, currency, date, json , async

@Component({
  selector: 'app-book-list',
  template: `
   <h1>Books</h1>
  <div class="col-md-7">
    <div class="well" *ngFor="let bk of books">
        <app-book [book]="bk"></app-book>
    </div>
   </div>
  `
})
export class BookListComponent {

  books: any[];

  //dependency injection. constructor injection
  constructor(svc: BookService) {

    svc.get()
      .subscribe(
        resp => this.books=resp,
        (err) => console.log(err)
      )
  }
}

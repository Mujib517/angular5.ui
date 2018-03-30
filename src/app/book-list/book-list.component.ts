import { Component } from '@angular/core';
import { BookService } from '../shared/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/models/book.model';
//pipes: | lowercase, uppercase, titlecase, currency, date, json , async

@Component({
  selector: 'app-book-list',
  template: `
   <h1>Books</h1>
   <div class="row">
    <button routerLink="/books/new" class="btn btn-danger btn-sm">Add New Button</button>
    <button routerLink="/books/reactive" class="btn btn-danger btn-sm">Reactive Form</button>
   </div>
    <div class="col-md-7">
      <div class="well" *ngFor="let bk of books">
          <app-book [book]="bk" (notify)="onNotify($event)"></app-book>
      </div>
    </div>
  `
})
export class BookListComponent {

  books: Book[];

  //dependency injection. constructor injection
  constructor(private svc: BookService, private route: ActivatedRoute) {
    this.books = this.route.snapshot.data.books;
  }

  onNotify(event) {
    console.log("Event received", event);
    this.svc.get()
      .subscribe(
        resp => this.books = resp,
        (err) => console.log(err)
      );
  }
}

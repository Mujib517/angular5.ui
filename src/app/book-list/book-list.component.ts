import { Component } from '@angular/core';
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

  constructor() {
    this.books = [{ id: 1, name: 'Speaking JS', author: 'Author 1', price: 100, lastUpdated: Date.now() },
    { id: 2, name: 'Eloquent JS', author: 'Author 2', price: 300, lastUpdated: Date.now() },
    { id: 3, name: 'HeadFirst JS', author: 'Author 3', price: 200, lastUpdated: Date.now() }];
  }
}

import { Component } from '@angular/core';
//pipes: | lowercase, uppercase, titlecase, currency, date, json , async

@Component({
  selector: 'app-book-list',
  template: `
   <h1>Books</h1>
  <div class="col-md-7">
    <div class="well" *ngFor="let book of books">
        <h3>{{book.name | uppercase}}</h3>
        <h4>{{book.author | lowercase}}</h4>
        <div>{{book.price | currency}}</div>
        <div>{{book.lastUpdated | date:'dd-MM-yyyy hh:mm'}}</div>
        <div> {{book.lastUpdated | time }}</div>
        <hr/>
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

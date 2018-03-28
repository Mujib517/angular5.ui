import { Component } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-new-book',
  template: `
  <h1>Add New Book</h1>
  <div *ngIf="saveSuccess" class="alert alert-success">Successfully saved!</div>
  <div *ngIf="saveFailed"  class="alert alert-danger">Failed to save. Please try again later</div>

  <div class="col-md-5">
    <div class="form-group">
      <input type="text" placeholder="Name" class="form-control" [(ngModel)]="book.name"/>
    </div>
    <div class="form-group">
      <input type="text" placeholder="Author" class="form-control"  [(ngModel)]="book.author"/>
    </div>
    <div class="form-group">
      <input type="text" placeholder="Price" class="form-control"  [(ngModel)]="book.price"/>
    </div>
    <div class="form-group">
    InStock: <input type="checkbox"  [(ngModel)]="book.inStock"/>
  </div>
  <div class="form-group">
    <button class="btn btn-success" (click)="onSave()">Save</button>
</div>
  </div>

  `
})
export class NewBookComponent {

  book: any = {};
  saveSuccess: boolean = false;
  saveFailed: boolean = false;


  constructor(private bookSvc: BookService) { }

  onSave() {
    console.log(this.book);

    this.bookSvc.save(this.book)
      .subscribe(
        res => {
          this.saveSuccess = true;
          this.book = {};
        },
        err => this.saveFailed = true
      );
  }
}

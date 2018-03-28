import { Component } from '@angular/core';
import { BookService } from '../shared/book.service';

//required,min,max,pattern

@Component({
  selector: 'app-new-book',
  template: `
  <h1>Add New Book</h1>
  <div *ngIf="saveSuccess" class="alert alert-success">Successfully saved!</div>
  <div *ngIf="saveFailed"  class="alert alert-danger">Failed to save. Please try again later</div>




  <form novalidate #frm="ngForm">
  
  <table class="table">
    <thead>
      <tr>
        <td>Element</td>
        <td>Errors</td>
        <td>Invalid</td>
        <td>Valid</td>
        <td>Dirty</td>
        <td>Pristine</td>
        <td>Touched</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Name</td>
        <td>{{name.errors | json}}</td>
        <td>{{name.invalid }}</td>
        <td>{{name.valid}}</td>
        <td>{{name.dirty}}</td>
        <td>{{name.pristine}}</td>
        <td>{{name.touched}}</td>
      </tr>
      </tbody>
  </table>
  
  
  <div class="col-md-5">
        <div class="form-group">
          <input #name="ngModel" type="text" required="true" minlength="3" maxlength="10" name="name" placeholder="Name" class="form-control" [(ngModel)]="book.name"/>
          <span *ngIf="name.touched && name.errors?.required" class="text-danger">Required</span>
          <span *ngIf="name.touched && name.errors?.minlength" class="text-danger">Min 3 chars</span>
          <span *ngIf="name.touched && name.errors?.maxLength" class="text-danger">Max 10 chars</span>
        </div>
        <div class="form-group">
          <input #author="ngModel" type="text" required="true" name="author" placeholder="Author" class="form-control"  [(ngModel)]="book.author"/>
          <span *ngIf="author.touched && author.invalid" class="text-danger">Required</span>
          </div>
        <div class="form-group">
          <input #price="ngModel" type="text" required="true" name="price" pattern="[0-9]{3,5}" placeholder="Price" class="form-control"  [(ngModel)]="book.price"/>
          <span *ngIf="price.touched && price.errors?.required" class="text-danger">Required</span>
          <span *ngIf="price.touched && price.errors?.pattern" class="text-danger">Invalid price</span>
        </div>
        <div class="form-group">
        InStock: <input type="checkbox" name="inStock"  [(ngModel)]="book.inStock"/>
      </div>
      <div class="form-group">
        <button [disabled]="frm.invalid" class="btn btn-success" (click)="onSave()" >Save</button>
      </div>
      </div>
  </form>

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
          this.saveFailed = false;
          this.book = {};
        },
        err => {
          this.saveSuccess = false;
          this.saveFailed = true;
        }
      );
  }
}

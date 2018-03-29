import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book',
  template: `
        <a [routerLink]="'/books/'+book._id"><h3>{{book.name | uppercase}}</h3></a>
        <h4>{{book.author | lowercase}}</h4>
        <div>{{book.price | currency}}</div>
        <div>{{book.lastUpdated | date:'dd-MM-yyyy hh:mm'}}</div>
        <div> {{book.lastUpdated | time }}</div>
        <button class="btn btn-danger btn-sm" (click)="onDelete(book._id)">Delete</button>
  `,
  styles: []
})
export class BookComponent {
  @Input()
  book: any;

  @Output()
  notify: EventEmitter<any>;

  constructor(private svc: BookService) {
    this.notify = new EventEmitter();
  }

  onDelete(id) {
    this.svc.delete(id)
      .subscribe(
        res => {
          console.log("Deleted");
          this.notify.emit({msg:"Dummy message"}); //something is changed
        },
        err => console.log(err)
      )
  }
}

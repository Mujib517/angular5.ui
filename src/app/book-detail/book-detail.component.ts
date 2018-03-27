import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  template: `
    <div class="panel-danger panel">
      <div class="panel-heading">
          {{book.name}} {{book.author}}
      </div>
      <div class="panel-body">
        <div>{{book.price | currency}}</div>
        InStock: <input type="checkbox" [checked]="book.inStock"/>
      </div>
      <div class="panel-footer">
        {{book.lastUpdated | time}}
     </div>
    </div>

  `
})
export class BookDetailComponent {
  book: any={};


  constructor(private svc: BookService, private route: ActivatedRoute) {
    var id = route.snapshot.params.id;
    console.log(id);

    svc.getById(id)
      .subscribe(
        res => this.book = res,
        err => console.log(err)
      )
  }
}
import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-book-detail',
  template: `

  <mat-spinner *ngIf="loading"></mat-spinner>
  <div *ngIf="!loading"> 
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

      <div>
        <ul class="nav-tabs nav">
          <li routerLinkActive="active"><a routerLink="reviews">Reviews</a></li>
          <li routerLinkActive="active"><a routerLink="specs">More</a></li>
        </ul>
        <router-outlet></router-outlet>
      </div>
 </div>

  `
})
export class BookDetailComponent implements OnInit {
  book: Book;
  loading: boolean = false;

  constructor(private svc: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    this.svc.reviews = null;
    this.book = new Book();
    var id = this.route.snapshot.params.id;

    this.svc.getById(id)
      .subscribe(
        res => {
          this.book = res;
          this.svc.reviews = res["reviews"] || [];
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        }
      );
  }
}
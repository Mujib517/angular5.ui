import { Component } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-reviews',
  template: `
   <h1 *ngIf="reviews && reviews.length>0">Reviews</h1>
   <h4 *ngIf="!reviews || reviews.length===0">Be the first to review</h4>
   <div class="col-md-5">
      <div *ngFor="let review of reviews">
        <h4>{{review.name}} {{review.rating}}*</h4>
        <h4>{{review.subject}}</h4>
        <div>{{review.message}}</div>
        <div>{{review.lastUpdated | time}}</div>
        <hr/>
      </div>
   </div>
  `
})
export class ReviewsComponent {

  reviews: any[];


  constructor(private svc: BookService) {
  }

  ngDoCheck(){
    this.reviews = this.svc.reviews;
  }
}

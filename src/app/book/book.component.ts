import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  template: `
        <h3>{{book.name | uppercase}}</h3>
        <h4>{{book.author | lowercase}}</h4>
        <div>{{book.price | currency}}</div>
        <div>{{book.lastUpdated | date:'dd-MM-yyyy hh:mm'}}</div>
        <div> {{book.lastUpdated | time }}</div>
  `,
  styles: []
})
export class BookComponent {
  @Input()
  book: any;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>

    <h1>{{count}}</h1>

    <button class="btn btn-sm" (click)="inc()">++</button>
  `
})
export class ContactComponent {

  count: number = 0;

  inc() {
    this.count++;
  }
  //change detection
  // asynchrounous operation
}
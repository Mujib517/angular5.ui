import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
   
  
  <div *ngIf="toggle">
    ....
    ...
    .....
    <h1  [class.fg]="myProperty">About Page</h1>
  </div>

   <h1>{{1+2}}</h1>
   <h1 [style.border]="myProperty2?'1px solid black':'none'" >{{"Sheldon" + " Cooper"}}</h1>

   {{myProperty}}

   <h3>{{getValue()}}</h3>

   {{myProperty ? "Yes":"No"}}

   <button [disabled]="getValue()">Save</button>

   <button (click)="onClick(10)">Click</button>

   <input type="text" [(ngModel)]="myProperty"/>
  `
})
export class AboutComponent {
  myProperty: string = "Hello Angular";
  toggle: boolean = true;

  //0,false,null,undefined,"",NaN

  getValue() {
    //complexx
    return "Hello World";
  }

  onClick(param) {
    if (this.toggle) this.toggle = false;
    else this.toggle = true;
  }
}
// 1.x ng-show ng-hide ngIf
//directives ngModel,ngClass, ngStyle, ngIf, ngFor

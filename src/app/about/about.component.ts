import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `


    <h1 [ngClass]="cls">Heading</h1>

  
  <div *ngIf="toggle">
    ....
    ...
    .....
    <h1  [class.fg]="myProperty">About Page</h1>
  </div>

  
  `
})
export class AboutComponent {
  myProperty: string = "Hello Angular";
  myProperty2: boolean;

  toggle: boolean = true;
  cls: any = {
    fg: true,
    bg: this.myProperty
  };

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

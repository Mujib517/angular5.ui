import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>

    <div [ngSwitch]="priority">
      <h1 *ngSwitchCase="'High'">High Priority Task</h1>
      <h1 *ngSwitchCase="'Medium'">Medium Priority Task</h1>
      <h1 *ngSwitchCase="'Low'">Low Priority Task</h1>
      <h1 *ngSwitchDefault>Very Low Priority Task</h1>
    </div>

  `
})
export class AboutComponent {

  priority: string = "11";

}
// 1.x ng-show ng-hide ngIf
//directives ngModel,ngClass, ngStyle, ngIf, ngFor,ngSwitch

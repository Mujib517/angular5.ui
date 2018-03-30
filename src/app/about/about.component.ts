import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';

@Component({
  selector: 'app-about',
  template: `
    <h1 dlBorder>About Page</h1>

    <h1 [dlShow]="myProp">Heding</h1>

  `
})
export class AboutComponent {

  myProp: string = "";

  constructor(logger: ConsoleLogger) {
    logger.error("There is an error");
  }
}
// 1.x ng-show ng-hide ngIf
//directives ngModel,ngClass, ngStyle, ngIf, ngFor,ngSwitch

import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';

@Component({
  selector: 'app-about',
  template: `
    <h1 dlBorder>About Page</h1>

    <h1 [dlShow]="myProp">Heading</h1>
    <h1 *dlIf="myProp">Heading2</h1>
  `
})
export class AboutComponent {

  myProp: string = "adfaf";

  constructor(logger: ConsoleLogger) {
    logger.error("There is an error");
  }
}
// 1.x ng-show ng-hide ngIf
//directives ngModel,ngClass, ngStyle, ngIf, ngFor,ngSwitch

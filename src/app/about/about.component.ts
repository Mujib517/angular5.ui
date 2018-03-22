import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>About Page</h1>

    <table border="1">
      <thead>
        <tr>
          <th>
            Value
          </th>
          <th>
            Index
          </th>
          <th>
            Even
          </th>
          <th>
            Odd
        </th>
        <th>
            First
        </th>
        <th>
            Last
        </th>
        </tr>
      </thead>
      <tbody>
        <tr [ngClass]="evn?'bg':'bg2'" *ngFor="let val of arr;let idx=index; let evn=even; let odd=odd;let fst=first; let lst=last;">
          <td>
            {{val}}
          </td>
          <td>
            {{idx}}
          </td>
          <td>
            {{evn}}
          </td>
          <td>
            {{odd}}
          </td>
          <td>
            {{fst}}
          </td>
          <td>
            {{lst}}
          </td>
        </tr>
      </tbody>
    </table>
    

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

  arr: number[] = [1, 2, 3, 4, 5, 6];



}
// 1.x ng-show ng-hide ngIf
//directives ngModel,ngClass, ngStyle, ngIf, ngFor,ngSwitch

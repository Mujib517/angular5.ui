import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
   <h1 [class.fg]="myProperty">About Page</h1>


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

  //0,false,null,undefined,"",NaN

  getValue() {
    //complexx
    return "Hello World";
  }

  onClick(param) {
    console.log("Clicked", param);
  }
}

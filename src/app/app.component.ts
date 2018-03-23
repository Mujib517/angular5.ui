import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
    <app-home>
    </app-home>
    <app-about></app-about>
    
    <app-book-list></app-book-list>`
})
export class AppComponent { }
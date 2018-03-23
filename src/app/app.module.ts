import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { TimePipe } from "./shared/time.pipe";
import { BookComponent } from './book/book.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, BookListComponent,TimePipe, BookComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
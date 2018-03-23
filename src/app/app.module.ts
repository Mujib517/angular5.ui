import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { TimePipe } from "./shared/time.pipe";
import { BookComponent } from './book/book.component';
import { BookService } from "./shared/book.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, BookListComponent, TimePipe, BookComponent],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
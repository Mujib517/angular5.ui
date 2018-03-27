import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookService } from "./shared/book.service";
import { ConsoleLogger } from "./shared/console.logger";
import { FileLogger } from "./shared/file.logger";
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRouterModule } from "./shared/app.router.module";
import { SharedModule } from "./shared/shared.module";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule,SharedModule,AppRouterModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, BookListComponent, BookComponent, UsersComponent, HeaderComponent, FooterComponent, ContactComponent],
   bootstrap: [AppComponent]
})
export class AppModule { }
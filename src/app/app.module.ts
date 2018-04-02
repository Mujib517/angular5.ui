import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from "./shared/app.router.module";

import { AppComponent, HomeComponent, AboutComponent, BookListComponent, BookComponent, UsersComponent, HeaderComponent, FooterComponent, ContactComponent, BookDetailComponent, ReviewsComponent, SpecsComponent, NewBookComponent, ReactiveFormComponent }
    from './app.barrel';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, AppRouterModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, BookListComponent, BookComponent, UsersComponent, HeaderComponent, FooterComponent, ContactComponent, BookDetailComponent, ReviewsComponent, SpecsComponent, NewBookComponent, ReactiveFormComponent, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
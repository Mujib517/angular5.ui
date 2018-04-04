import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from "./shared/app.router.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatIconModule,
    MatCheckboxModule, MatInputModule, MatSelectModule, MatDatepickerModule,
    MatToolbarModule, MatProgressSpinnerModule
} from '@angular/material';

import { AppComponent, HomeComponent, AboutComponent, BookListComponent, BookComponent, UsersComponent, HeaderComponent, FooterComponent, ContactComponent, BookDetailComponent, ReviewsComponent, SpecsComponent, NewBookComponent, ReactiveFormComponent, LazyComponent }
    from './app.barrel';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule,
        ReactiveFormsModule, SharedModule, AppRouterModule, MatButtonModule,
        MatIconModule, MatCheckboxModule, MatInputModule, MatSelectModule,
        MatToolbarModule, MatProgressSpinnerModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, BookListComponent, BookComponent, UsersComponent, HeaderComponent, FooterComponent, ContactComponent, BookDetailComponent, ReviewsComponent, SpecsComponent, NewBookComponent, ReactiveFormComponent, LoginComponent, LazyComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
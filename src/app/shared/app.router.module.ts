import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { BookListComponent } from "../book-list/book-list.component";
import { BookDetailComponent } from "../book-detail/book-detail.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { SpecsComponent } from "../specs/specs.component";

const CHILDREN: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'reviews' },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'specs', component: SpecsComponent }];


const ROUTES: Route[] =
    [{ path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'books', component: BookListComponent },
    { path: 'books/:id', component: BookDetailComponent, children: CHILDREN },
    { path: '**', redirectTo: '' }];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule { }
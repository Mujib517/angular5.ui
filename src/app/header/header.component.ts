import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    template: `
  <header class="container">
  <nav>
      <div class="navbar-inverse navbar">
          <div class="navbar-brand">My Books App</div>
          <ul class="navbar-nav nav">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/about">About</a></li>
              <li><a routerLink="/books">Books</a></li>
              <li><a routerLink="/contact">Contact</a></li>
          </ul>
          <div class="pull-right">
            <button  *ngIf="!isLoggedIn" class="btn btn-info btn-sm" routerLink="/login">Login</button>
            <button  *ngIf="isLoggedIn" class="btn btn-info btn-sm" (click)="onLogout()">Logout</button>
          </div>
      </div>
      
  </nav>
</header>
  `
})
export class HeaderComponent {
    isLoggedIn: boolean;

    constructor(private userSvc: UserService, private route: Router) {
        this.isLoggedIn = this.userSvc.isLoggedIn;
    }

    onLogout() {
        this.userSvc.logout();
        this.route.navigate(["/login"]);
        this.isLoggedIn = this.userSvc.isLoggedIn;
    }
}

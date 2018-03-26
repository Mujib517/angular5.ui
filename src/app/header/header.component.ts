import { Component } from '@angular/core';

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
      </div>
  </nav>
</header>
  `
})
export class HeaderComponent{}

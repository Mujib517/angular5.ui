import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>


    <mat-toolbar color="primary">
      <button mat-button>Home</button>
      <button mat-button>About</button>
      <button mat-button>Contact</button>
      <button mat-button>Products</button>
    </mat-toolbar>

      <button mat-button color="accent">Click Me</button>
      <button mat-raised-button color="accent">Click Me</button>
      <button mat-fab color="accent">+</button>
      <button mat-mini-fab color="accent">
        <mat-icon>home</mat-icon>
      </button>

      <mat-checkbox>Check me</mat-checkbox>

      <mat-form-field>
        <input matInput placeholder="Favorite food" value="Biryani">
     </mat-form-field>

     <mat-form-field>
      <mat-select placeholder="Favorite food">
        <mat-option>One</mat-option>
        <mat-option>Two</mat-option>
        <mat-option>Three</mat-option>
      </mat-select>
  </mat-form-field>

  <mat-spinner><mat-spinner>

  `
})
export class ContactComponent {
}
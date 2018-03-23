import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  template: `
  <h1>Users</h1>
 
  <div class="col-md-6">
    <div class="well" *ngFor="let user of users | async">
      <h4>{{user.login}}</h4>
      <img [src]="user.avatar_url" width="100" height="100" class="img img-circle"/>
    </div>
  </div>
  `
})

export class UsersComponent {

  users:Observable<any>

  constructor(http: HttpClient) {
    this.users = http.get("https://api.github.com/users");
    // .subscribe(
    //   (resp) => this.users = resp,
    //   (err) => console.log(err)
    // );
  }
}
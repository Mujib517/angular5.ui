import { Component } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h1>Login</h1>
    <div class="col-md-5">
      <div class="form-group">
        <input type="text" placeholder="Username" class="form-control" [(ngModel)]="user.username"/>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="form-control" [(ngModel)]="user.password"/>
     </div>
     <div class="form-group">
        <button class="btn btn-danger" (click)="onLogin()">Login</button>
     </div>
    </div>
  `
})
export class LoginComponent {

  user: User;

  constructor(private userSvc: UserService, private route: Router) {
    this.user = new User();
  }

  onLogin() {
    this.userSvc.login(this.user)
      .subscribe(
        res => {
          this.userSvc.saveToken(res);
          this.route.navigate(['/books'])
        },
        err => console.log(err)
      );
  }
}

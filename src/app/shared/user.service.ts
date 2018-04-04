import { User } from "./models/user.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class UserService {

    onLogin: Subject<boolean>;

    constructor(private http: HttpClient) {
        this.onLogin = new Subject();
    }

    login(user: User): Observable<User> {
        return this.http.post<User>("https://node-rest-training.herokuapp.com/api/users/login", user);
    }

    get isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    saveToken(user: User) {
        localStorage.setItem('token', user.token);
        this.onLogin.next(true);
    }

    logout() {
        localStorage.removeItem('token');
        this.onLogin.next(false);
    }
}
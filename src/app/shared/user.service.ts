import { User } from "./models/user.model";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    login(user: User): Observable<User> {
        return this.http.post<User>("https://node-rest-training.herokuapp.com/api/users/login", user);
    }

    get isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    saveToken(user: User) {
        localStorage.setItem('token', user.token);
    }

    logout() {
        localStorage.removeItem('token');
    }
}
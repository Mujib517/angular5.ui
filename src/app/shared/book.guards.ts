import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class BookGaurds implements CanActivate {

    constructor(private userSvc: UserService) { }

    canActivate(): boolean {
        return this.userSvc.isLoggedIn;
    }
}
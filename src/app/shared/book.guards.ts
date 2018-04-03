import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, CanActivateChild } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class BookGaurds implements CanActivate, CanLoad, CanActivateChild {

    canActivateChild(): boolean {
        return true;
    }
    constructor(private userSvc: UserService) { }


    canLoad(): boolean {
        return this.userSvc.isLoggedIn;
    }

    canActivate(): boolean {
        return this.userSvc.isLoggedIn;
    }
}
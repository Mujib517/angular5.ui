import { Injectable } from "@angular/core";
import { BookService } from "./book.service";
import { Resolve } from "@angular/router";

@Injectable()
export class BookResolver implements Resolve<any>{

    constructor(private svc: BookService) { }

    resolve() {
        return this.svc.get();
    }
}
import { Injectable } from "@angular/core";

@Injectable()
export class BookService {

    get() {
        return [{ id: 1, name: 'Speaking JS', author: 'Author 1', price: 100, lastUpdated: Date.now() },
        { id: 2, name: 'Eloquent JS', author: 'Author 2', price: 300, lastUpdated: Date.now() },
        { id: 3, name: 'HeadFirst JS', author: 'Author 3', price: 200, lastUpdated: Date.now() }];
    }
}
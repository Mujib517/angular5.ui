import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable } from "rxjs/Observable";
import { Book } from "./models/book.model";
import { Review } from "./models/review.model";

@Injectable()
export class BookService {

    reviews: Review[];

    constructor(private http: HttpClient) {
    }

    get(): Observable<Book[]> {
        return this.http.get<Book[]>('https://node-rest-training.herokuapp.com/api/books')
            .retry(3)
            .map(res => res["data"]);
    }

    getById(id: string): Observable<Book> {
        return this.http.get<Book>('https://node-rest-training.herokuapp.com/api/books/' + id);
    }

    save(book: any): Observable<Book> {
        return this.http.post<Book>("https://node-rest-training.herokuapp.com/api/books/", book);
    }

    delete(id: string): Observable<any> {
        return this.http.delete('https://node-rest-training.herokuapp.com/api/books/' + id);
    }
}
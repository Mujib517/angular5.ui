import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable } from "rxjs/Observable";
import { Book } from "./models/book.model";
import { Review } from "./models/review.model";
import { environment } from "../../environments/environment";

@Injectable()
export class BookService {

    reviews: Review[];
    private _url = environment.url;

    constructor(private http: HttpClient) {
    }

    get(): Observable<Book[]> {

        return this.http.get<Book[]>(this._url)
            .retry(3)
            .map(res => res["data"]);
    }

    getById(id: string): Observable<Book> {
        return this.http.get<Book>(this._url + id);
    }

    save(book: any): Observable<Book> {
        return this.http.post<Book>(this._url, book);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(this._url + id);
    }
}
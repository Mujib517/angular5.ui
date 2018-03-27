import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class BookService {

    reviews: any[];

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get('https://node-rest-training.herokuapp.com/api/books')
            .retry(3)
            .map(res => res["data"]);
    }

    getById(id: string) {
        return this.http.get('https://node-rest-training.herokuapp.com/api/books/' + id);
    }
}
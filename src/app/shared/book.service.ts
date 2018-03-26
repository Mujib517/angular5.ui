import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get('https://node-rest-training.herokuapp.com/api/books')
            .map(res => res["data"]);
    }
}
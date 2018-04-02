import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

export class BookIntercetor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //req is immutable
        const newReq = req.clone({ headers: req.headers.set("authorization", "abc-def-ghi") });
        return next.handle(newReq)
            .do(res => console.log(res))
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }
}
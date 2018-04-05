import { BookDetailComponent } from './book-detail.component';
import { Observable } from 'rxjs/Observable';


describe("Book Detail", () => {

    var comp;
    var bookSvc;
    var route;

    beforeEach(function () {
        route = {
            snapshot: {
                params: {
                    id: 100
                }
            }
        };

        var fakeObs = new Observable(o => o.next(10));

        bookSvc = jasmine.createSpyObj("Service", ["getById"]);
        bookSvc.getById = jasmine.createSpy("getById")
            .and.returnValue(fakeObs);

        comp = new BookDetailComponent(bookSvc, route);
    });

    it("Should have book undefined", () => {
        expect(comp.book).toBeUndefined();
    });

    it("Should have loading set to false", () => {
        expect(comp.loading).toBe(false);
    });

    it("Should call getById of book service", () => {
        comp.ngOnInit();

        expect(bookSvc.getById).toHaveBeenCalledWith(100);
    });

    it("Should define books", () => {
        comp.ngOnInit();
        expect(comp.book).toBeDefined();
    });
});
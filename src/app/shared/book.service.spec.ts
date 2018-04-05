import { BookService } from './book.service';

describe("Book service", () => {

    var svc;
    var http;

    beforeEach(function () {
        http = jasmine.createSpyObj("http", ["get"]);
        svc = new BookService(http);
    });

    it("Should make a http.gete call", () => {
        svc.getById("abc-def");

        expect(http.get).toHaveBeenCalled();
    });
});
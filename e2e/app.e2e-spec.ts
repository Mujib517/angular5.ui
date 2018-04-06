import { browser, element, by } from 'protractor';

describe("Application", () => {

    it("Should have title Angular.Ui.Training", () => {
        browser.get('/');
        expect(browser.getTitle()).toBe("Angular.Ui.Training");
    });

    it("Should have home page heading", () => {
        var h1 = element(by.css("h1"));
        expect(h1.getText()).toBe("Home Page");
    });

    it("Should navigate about page when about link is clicked", () => {
        var link = element(by.css('a[href="/about"]'));
        link.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/about");
    });

    it("Should have about page heading", () => {
        var headings = element.all(by.css("h1"));
        var h1 = headings.get(0);
        expect(h1.getText()).toBe("About Page");
    });

    it("Should navigate books page when about link is clicked", () => {
        var link = element(by.css('a[href="/books"]'));
        link.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/books");
    });

    it("Should navigate new book page when about add new book button is clicked", () => {
        var btn = element(by.css('a[href="/books"]'));
        btn.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/books");
    });

    it("Should navigate new book page when about add new book button is clicked", () => {
        var btn = element(by.css('button[routerlink="/books/new"]'));
        btn.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/books/new");
    });

    it("Should have button disabled", () => {
        var btn = element(by.css('.btn.btn-success'));

        expect(btn.isEnabled()).toBe(false);
    });

    it("Should enable the save button when validations passes", () => {
        var name = element(by.css('input[name="name"]'));
        var author = element(by.css('input[name="author"]'));
        var price = element(by.css('input[name="price"]'));
        var btn = element(by.css('.btn.btn-success'));


        name.sendKeys("My Cool JS Book");
        author.sendKeys("Good Author");
        price.sendKeys("220");

        expect(btn.isEnabled()).toBe(true);
    });

    it("Should show the success message", () => {
        var alert = element(by.css(".alert.alert-success"));
        var btn = element(by.css('.btn.btn-success'));
        btn.click();

        expect(alert.isDisplayed()).toBe(true);
    });
});
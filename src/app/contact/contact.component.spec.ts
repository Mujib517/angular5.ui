import { ContactComponent } from './contact.component';

describe("Contact Component", () => {

    var comp;

    beforeEach(() => {
        comp = new ContactComponent();
    });

    it("Should have count defined", () => {
        expect(comp.count).toBeDefined();
    });

    it("Should have 10 initial value", () => {
        expect(comp.count).toBe(10);
    });

    it("Should have count2 undefined", () => {
        expect(comp.count2).toBeUndefined();
    });
});
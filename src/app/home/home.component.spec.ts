import { HomeComponent } from './home.component';

describe("Home Component", () => {

    var comp;
    var logger;

    beforeEach(function () {
        //mock
        logger = jasmine.createSpyObj("logger", ["warn"]);

        comp = new HomeComponent(logger);
    });

    it("should have count defined to 0", () => {
        expect(comp.count).toBe(0);
    });

    it("Should call warn of logger", () => {
        expect(logger.warn).toHaveBeenCalledWith("Component is slow");
    });

    afterEach(function () {
        comp = null;
    });
});
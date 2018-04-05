//jasmine
//karma
//red green refactor

import { Calculator } from './calculator';
//group
describe("Calculator", function () {
    var calc;

    beforeEach(() => {
        //Arrange
        calc = new Calculator();
    });

    describe("add()", () => {
        it("Should add two numbers and return result", () => {
            var result = calc.add(10, 20);

            expect(result).toBe(30);
        });

        it("Shold return zero when first parameter is zero", () => {
            var result = calc.add(0, 1000);

            expect(result).toBe(0);
        });

        it("Should return -1 when the second parameter is zero", () => {
            var result = calc.add(100, 0);

            expect(result).toBe(-1);

        });

        it("Shold return -1 when both parameters are negative", () => {
            var result = calc.add(-1, -100);

            expect(result).toBe(-1);
        });
    });

    describe("sub()", () => {
        it("Should subtract two numbers and return result", () => {
            var result = calc.sub(20, 10);
            expect(result).toBe(10);
        });
    });

    afterEach(() => {
        calc = null;
    });
});
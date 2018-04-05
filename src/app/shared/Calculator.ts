//tdd 
export class Calculator {

    add(a, b) {
        if (a < 0 || b < 0) return -1;
        if (a === 0) return 0;
        if (b === 0) return -1;
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }
}
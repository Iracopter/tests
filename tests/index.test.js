

describe("Sum of numbers", () => {
    const desc = "<p>Sum of numbers</p>";

    describe(desc, () => {
        it("Should return 10", () => {
            const result= Sum(2,8);
            expect(result).toBe(10);
        });
    });
});

describe("Riznycia of numbers", () => {
    const desc = "<p>Riznycia of numbers</p>";

    describe(desc, () => {
        it("Should return 2", () => {
            const result= Minus(10,8);
            expect(result).toBe(2);
        });
    });
});

describe("Dobutok of numbers", () => {
    const desc = "<p>Dobutok of numbers</p>";

    describe(desc, () => {
        it("Should return 16", () => {
            const result= Dobutok(2,8);
            expect(result).toBe(16);
        });
    });
});

describe("Dilennia of numbers", () => {
    const desc = "<p>Dilennia of numbers</p>";

    describe(desc, () => {
        it("Should return 2", () => {
            const result= Dillenia(2,1);
            expect(result).toBe(2);
        });
    });
});



describe("Max of numbers", () => {
    const desc = "<p>Max of numbers</p>";

    describe(desc, () => {
        it("Should return 10", () => {
            const result= Max([1,4,7,8,9,4,3,-2,6,8,10,6,4]);
            expect(result).toBe(10);
        });
    });
});

describe("Min of numbers", () => {
    const desc = "<p>Min of numbers</p>";

    describe(desc, () => {
        it("Should return -2", () => {
            const result= Min([1,4,7,8,9,4,3,-2,6,8,10,6,4]);
            expect(result).toBe((-2));
        });
    });
});
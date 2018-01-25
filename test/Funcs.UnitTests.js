/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
/*global Funcs describe beforeEach afterEach it expect
*/
/*eslint no-undef: "error"*/

describe("Funcs functions, ", function() {

    let names = ["Joy","Sue","Bob","Tom", "Sophie"];

    beforeEach(function() {
        this.funcs = new Funcs();
    });
    afterEach(function() {
        this.funcs = null;
    });

    describe("filter(), ", function() {

        it("filter() with predicate", function() {
          
            let filteredNames = this.funcs.filter(names, e => e.startsWith("S"));
            console.log(`filter:${JSON.stringify(filteredNames)}`);
            expect(filteredNames.length).toBe(2);
            expect(filteredNames[0]).toBe("Sue");
            expect(filteredNames[1]).toBe("Sophie");
        });

        it("filter() with predicate true", function() {
          
            let filteredNames = this.funcs.filter(names, () => true);
            console.log(`filter:${JSON.stringify(filteredNames)}`);
            expect(filteredNames.length).toBe(5);
            expect(filteredNames[0]).toBe("Joy");
            expect(filteredNames[1]).toBe("Sue");
        });

        it("filter() empty list with predicate true", function() {
            
            let filteredNames = this.funcs.filter( [], () => true);
            expect(filteredNames.length).toBe(0);
        });
    });
    
    describe("take()", function() {

        it("take(2)", function() {
          
            let filteredNames = this.funcs.take(names, 2);
            console.log(`taken:${JSON.stringify(filteredNames)}`);
            expect(filteredNames.length).toBe(2);
            expect(filteredNames[0]).toBe("Joy");
            expect(filteredNames[1]).toBe("Sue");
        });
        it("take(0)", function() {

            let filteredNames = this.funcs.take(names, 0);
            console.log(`taken:${JSON.stringify(filteredNames)}`);
            expect(filteredNames.length).toBe(0);
        });
        it("take() with no parameter", function() {

            let filteredNames = this.funcs.take(names);
            console.log(`taken:${JSON.stringify(filteredNames)}`);
            expect(filteredNames.length).toBe(0);
        });
        it("take() with number=null", function() {

            expect(() => { 
                (new Funcs()).take(names, null);
            }).toThrow(new Error(Funcs.ARGUMENT_EXCEPTION));
        });
    });

    describe("skip()", function() {

        it("skip(3)", function() {

            let filteredNames = this.funcs.skip(names, 3);
            console.log(`skip:${JSON.stringify(filteredNames)}`);
            expect(filteredNames.length).toBe(2);
            expect(filteredNames[0]).toBe("Tom");
            expect(filteredNames[1]).toBe("Sophie");
        });
        it("skip(0)", function() {
          
            let filteredNames = this.funcs.skip(names, 0);
            console.log(`skip:${JSON.stringify(filteredNames)}`);
            expect(filteredNames.length).toBe(5);
        });
    });

    describe("range()::", function() {

        it("range(0, 9)", function() {
            let values = this.funcs.range(0, 9);
            console.log(`range:${JSON.stringify(values)}`);
            expect(values).toEqual([0,1,2,3,4,5,6,7,8,9]);
        });
        it("range(0, 9, 2)", function() {
            let values = this.funcs.range(0, 9, 2);
            console.log(`range:${JSON.stringify(values)}`);
            expect(values).toEqual([0,2,4,6,8]);
        });
        it("range(0, 0)", function() {
            let values = this.funcs.range(0, 0);
            console.log(`range:${JSON.stringify(values)}`);
            expect(values).toEqual([0]);
        });
        it("range(undefined, 0)", function() {
            expect(() => { this.funcs.range(undefined, 0); }).toThrow(new Error(Funcs.ARGUMENT_EXCEPTION));
        });
        it("range(0, undefined)", function() {
            expect(() => { this.funcs.range(0, undefined); }).toThrow(new Error(Funcs.ARGUMENT_EXCEPTION));
        });
        it("range(null, 0)", function() {
            expect(() => { this.funcs.range(null, 0); }).toThrow(new Error(Funcs.ARGUMENT_EXCEPTION));
        });
        it("range(0, null)", function() {
            expect(() => { this.funcs.range(0, null); }).toThrow(new Error(Funcs.ARGUMENT_EXCEPTION));
        });
        it("range(-1, 9)", function() {
            expect(() => { this.funcs.range(-1, 9); }).toThrow(new Error(Funcs.ARGUMENT_EXCEPTION));
        });
        it("range(9, 0)", function() {
            expect(() => { this.funcs.range(9, 0); }).toThrow(new Error(Funcs.ARGUMENT_EXCEPTION));
        });
    });
});

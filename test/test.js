const expect = require('chai').expect;
const Calculator = require('../calculator');

let calc = new Calculator();

describe('Can do arithmetic', () => {
    describe('Can add numbers', () => {
        it('Can add two positive integers', () => {
            expect(calc.add(1, 1)).to.equal(2);
        });
        it('Can add integer to zero', () =>{
            expect(calc.add(1, 0)).to.equal(1);
        });
        it('Can not add a number and a function', () =>{
            expect(calc.add(1, () => {})).to.equal('1() => {}');
        });
    })
    describe('Can subtract numbers', () => {
        it('Can subtract two positive integers', () =>{
            expect(calc.subtract(1, 1)).to.equal(0);
        });
        it('Can subtract integer to zero', () =>{
            expect(calc.subtract(1, 0)).to.equal(1);
        });
    });
    describe('Can add numbers asynchronously', () => {
        it('Can add two integers asynch', (done) => {
            calc.addAsync(3, 2, (val) => {
                if (val === 5) {
                    done();
                } else {
                    done(new Error('nope'));
                }
            });
        });
    });
});

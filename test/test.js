const expect = require('chai').expect;

expect(1).to.equal(1);
describe('Taking a first stab at TDD', () => {
    it('woohoo!', () => {
        expect(1).to.equal(1);
        expect(2).to.equal(1);
    });
});
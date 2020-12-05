const assert = require('assert'); // módulo nativo do node
const Math = require('../src/math.js');

describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();

        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });
});
const sut = require('./index.js');

describe('index', () => {
    describe('when \'foo\' is called', () => {
        let result;
        
        beforeEach(() => {
            result = sut.foo();
        });

        it('should return 1', () => {
            expect(result).toBe(1);
        });
    });
});
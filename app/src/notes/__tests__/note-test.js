
jest.dontMock('../note.jsx');

describe('note', function() {
    it('retuns a option based on props', function() {
        var note = require('../note.jsx');
        expect(note.super()).toBe(3);
    });
});
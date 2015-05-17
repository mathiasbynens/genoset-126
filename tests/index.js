var gs126 = require('../index.js');
var assert = require('assert');
require('mocha');

describe('genoset-126', function() {
	it('should match genomes that fulfill the criteria', function() {
		assert.equal(gs126(require('./fixtures/match-1.json')), true);
		assert.equal(gs126(require('./fixtures/match-2.json')), true);
	});
	it('should not match genomes that do not fulfill the criteria', function() {
		assert.equal(gs126(require('./fixtures/no-match-1.json')), false);
		assert.equal(gs126(require('./fixtures/no-match-2.json')), false);
	});
});

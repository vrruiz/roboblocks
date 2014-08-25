/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define(['lib/blocks/math-random'], function(block) {

		describe('Example Test 2', function () {
			it('should have true equal true', function () {
				expect( true ).to.equal( true );
			});
		});

	});

}).call( this );

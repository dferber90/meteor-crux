describe('Example', function () {
	'use strict';

	describe('ExampleControl', function () {
		after(function () {
			this.reset();
		});

		before(function () {
			var self = this;

			this.title(true);
      		this.subtitle('Example control to get to know respondly:ctrl.');

      		var args = {
      			label: 'The label',
      			message: 'The message'
      		};

      		this.load('ctrl-example', {args: args}, function () {
      			var ctrl = self.ctrl();

      			ctrl.on('clicked', function (j, e) {
      				console.log('clicked example ctrl', e);
      			});
      		});
		});


		describe.section('State', function () {
			it.radio(
				'color',
				[null, 'silver', 'blue', 'green', 'red', 'orange', 'black'],
				function () {}
			);
		});
	});
});
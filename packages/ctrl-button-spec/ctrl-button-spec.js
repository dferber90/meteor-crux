describe('Core', function () {
	'use strict';

	describe('Ctrl', function () {
	
		describe('Button', function () {
		
			after(function () {
				this.reset();
			});

			before(function () {
				var self = this;
				this.title(true);
				this.subtitle('Standard input button');

				var args = {
					label: 'My Buttton'
				};

				this.load('ctrl-button', {args: args}, function () {
					var ctrl = self.ctrl();

					ctrl.on('clicked', function (j, e) {
						console.log('++clicked', e);
					});
				});
			});

			it('write', function () {
				console.group('Button');
				var ctrl = this.ctrl();
				console.log(ctrl);
				console.log(' - is Enabled', ctrl.isEnabled());
				console.log(' - size', ctrl.size());
				console.groupEnd('Button');
			});
			

			it('focus', function () {
				this.ctrl().focus();
			});


			describe.section('State', function () {
				it.boolean('isEnabled');
				it.boolean('block');

				it.radio('size', ['small', 'normal']);
				it.radio('color', [null, 'primary', 'secondary', 'tertiary', 'quaternary']);
				it.select('tabIndex', [null, 0, -1, 5]);
			});

			describe.section('Label', function () {
				it('`null`', function () { this.ctrl().label(null) });
				it('emtpy-string', function () { this.ctrl().label('') });
				it('spaces', function () { this.ctrl().label('  ') });
				it('"My Button"', function () { this.ctrl().label('My Button') });
				it('Long',function () { this.ctrl().label(this.lorem(10)); });
				it('HTML', function () { this.ctrl().label('<code>Hello</code> there'); });
			});

		});
	});
});
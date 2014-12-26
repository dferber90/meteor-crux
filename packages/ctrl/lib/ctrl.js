Ctrl.define({
	'myCtrl': {
		init: function () {

		},
		ready: function () {
			var color = this.defaultValue('color', 'red');
		},
		destroyed: function () {

		},

		helpers: {
		},

		events: {

		},

		api: {
		}
	}
});


describe('Core', function () {
  'use strict';

  describe('Ctrl', function () {
    'use strict';
  
  	describe('Button', function () {
  	  'use strict';
  	
  	  after(function () {
  	  	this.reset();
  	  });

  	  before(function () {
  	  	this.title(true);
  	  	this.subtitle('Standard input button.');

	  	  var args = {
	  	  	label: 'Das Label',
	  	  	cssClass: 'css-class'
	  	  };

	  	  this.load('myCtrl', {
	  	  	args: args
	  	  });
  	  });
  	});
    
  });
});

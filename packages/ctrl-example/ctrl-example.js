Ctrl.define({
	'ctrl-example': {
		init: function() {

		},

		api: {
			color: function (value) {
				return this.prop('color', value, {default: 'black'});
			}
		},

		helpers: {

		}
	}
})
Ctrl.define({
	'ctrl-radio-group': {
		init: function () {
			var self = this;

			this.items = [];
		},

		api: {
			size: function (value) {
				return this.prop('size', value, {default: 22});
			},

			add: function (opts) {
				var options = opts || {};

				var item = createItem(this, options);
				this.items.push(item);
			},

			remove: function (index) {
				var item = this.items[index];

				if (! item) return 'exiting';

				item.ctrl.dispose();
				this.items.removeAt(index);
			}
		},

		helpers: {
			items: function () {
				return this.items;
			}
		}

	}
});


var createItem = function (instance, options) {
	var id = options.id || _.uniqueId('ctrl-radio-group-'),
		defaultIsEnabled = _.isBoolean(options.isEnabled) ? options.isEnabled : true,
		helpers = instance.helpers,
		ctrl;

	var data = {
		label: options.label || 'Unnamed',
		message: options.message,
		size: instance.api.size(),
		isEnabled: defaultIsEnabled,
		value: options.value
	};

	ctrl = instance.appendCtrl('ctrl-radio', instance.el(), {data: data});
	ctrl.onDestroyed(function () {
		ctrl.off('changed');
	});
};
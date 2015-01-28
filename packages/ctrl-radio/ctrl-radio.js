// based on https://github.com/Respondly/meteor-ctrls-input/blob/master/client/radio/radio.coffee

Ctrl.define({
	'ctrl-radio': {
		init: function () {
			var self = this;
			this.autorun(function () {
				var supportedSizes = [22, 34];
				var size = self.api.size();

				if (! _.contains(supportedSizes, size)) {
					throw new Error("Size "+ size + " not supported. Use one of: " + supportedSizes);
				}
			});
		},

		api: {
			isEnabled: function (value) {
				return this.prop('isEnabled', value, {default: true});
			},
			size: function (value) {
				return this.prop('size', value, {default: 22});
			},
			isClickable: function (value) {
				return this.prop('isClickable', value, {default: true});
			},
			label: function (value) {
				return this.prop('label', value, {default: null});
			},
			message: function (value) {
				return this.prop('message', value, {default: null});
			},
			value: function (value) {
				return this.data.value;
			},


			// Gets or sets whether the checkbox is checked.
			//  @param value: (optional) Boolean value.  Pass nothing to read.
			//  @param options:
			//    - silent:     (optional) Flag indicating if the [changed] event should fire (default:true).
			//    - wasClicked: (optional) Flag indicating if the change originated from a click event.
			isChecked: function (value, options) {
				options = options || {};

				var result = this.prop('isChecked', value, {default: false}),
					args;

				if (! _.isUndefined(value)) {
					if (! options.silent && this._lastIsChecked !== value) {
						args = {
							isChecked: value,
							wasClicked: !!options.wasClicked
						};
						this.trigger('changed', args);
					}
					this._lastIsChecked = value;
				}
				return result;
			},

 
			//Toggles the is-checked state of the button.
			// @param toggle: (optional) The is-checked state.
			// @param options:
			//   - silent:     (optional) Flag indicating if the [changed] event should fire (default:true).
			//   - wasClicked: (optional) Flag indicating if the change originated from a click event.
			toggle: function (value, options) {
				options = options || {};

				if (_.isObject(value)) {
					options = value;
					toggle = undefined;
				}
				if (_.isUndefined(toggle)) {
					toggle = ! this.api.isChecked();
				}
				return this.api.isChecked(toggle, options);
			},


			// The result of a click event.
			click: function (value) {
				if (this.api.isEnabled()) {
					if (this.api.isChecked()) {
						this.api.isChecked(true, {wasClicked: true});
					}
					this.ctrl.focus();
				}
			}

		},

		helpers: {
			cssClass: function () {
				var css = "ctrl-size-" + this.api.size();
				css += ' ';
				css += this.api.isChecked() ? 'ctrl-checked': 'ctrl-not-checked';
				css += ' ';
				css += this.api.isEnabled() ? 'ctrl-enabled' : 'ctrl-disabled';

				return css;
			},

			isLabelCtrl: function () {
				var label = this.api.label();
				return label && label.tmpl;
			},

			isMessageCtrl: function () {
				var message = this.api.message();
				return message && message.tmpl;
			}
		},

		events: {
			'mousedown': function (event) {
				if (this.api.isClickable() && event.button === 0) {
					this.api.click();
				}
			},

			'keyup': function (event) {
				if (this.api.isClickable() && event.which === Const.KEYS.SPACE) {
					this.api.click();
				}
			}
		}
	}
});
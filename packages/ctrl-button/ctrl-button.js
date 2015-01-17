/*
	ctrl-button
	ctrl-button-primary
	ctrl-button-large
	ctrl-button-block
	ctrl-button-caps
*/

Ctrl.define({
	'ctrl-button': {
		init: function () {},

		api: {

			// REACTIVE Properties.
			isEnabled: function (value) {
				return this.prop('isEnabled', value, {default: true});
			},

			size: function (value) {
				return this.prop('size', value, {default: 'normal'});
			},

			color: function (value) {
				return this.prop('color', value, {default: 'primary'});
			},

			label: function (value) {
				return this.prop('label', value);
			},

			block: function (value) { // boolean
				return this.prop('block', value, {default: false});
			},

			caps: function (value) {
				return this.prop('caps', value, {default: true});
			},

			tabIndex: function (value) {
				return this.prop('tabIndex', value);
			},

			isOver: function (value) {
				return this.prop('isOver', value, {default: false});
			},

			// Invokes the click action on the button, alerting listeners if required.
			click: function (value) {
				if (this.api.isEnabled()) {
					return this.helpers.fire('clicked');
				}
			}
		},

		helpers: {
			cssClass: function () {
				var cssClass = [],
					color,
					size;

				if (this.api.isEnabled()) {
					cssClass.push('ctrl-button-enabled');
				} else {
					cssClass.push('ctrl-button-disabled');
				}

				color = this.api.color();
				cssClass.push('ctrl-button-' + color);

				if (this.api.block()) {
					cssClass.push('ctrl-button-block');
				}

				if (this.api.caps()) {
					cssClass.push('ctrl-button-caps');
				}

				size = this.api.size();
				switch (size) {
					case 'small':
						// nothing to do
						break;
					case 'normal':
						cssClass.push('ctrl-button-large');
						break;
				}

				return cssClass.join(' ');
			},

			disabled: function () {
				if (! this.api.isEnabled())
					return 'disabled';
			},

			fire: function (event) {
				var self = this;
				this.trigger(event, {label: self.api.label()});
			},

			label: function () {
				return this.api.label();
			},

			onClick: function (isPressed) {
				if (this.api.isEnabled()) {
					this.isPressed(isPressed);
					if (! isPressed) {
						this.helpers.fire('clicked');
					}
				}
			},

			tabIndex: function () {
				return this.api.tabIndex() || '';
			}
		},

		events: {
			'click': function (e) {
				this.api.click();
			},

			'mouseenter': function (e) {
				this.api.isOver(true);
			},

			'mouseleave': function (e) {
				this.api.isOver(false);
			}
		}
	}
})
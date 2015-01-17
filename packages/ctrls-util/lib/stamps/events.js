
// Provides an eventing mechanism for objects.
Stamps.events = stampit().enclose(function () {
	var self = this;

	this.on = function () {
		return self.event().on.apply(self.$, arguments);
	};
	this.off = function () {
		return self.event().off.apply(self.$, arguments);
	};
	this.trigger = function () {
		return self.event().trigger.apply(self.$, arguments);
	};

	this.event = function () {
		if (! self.$)
			self.$ = $({});
		return self.$;
	};
});



// Determines whether the given click event args was
// from the Left mouse button.
// @param e: The arguments from the click event.
Util.isLeftClick = function (e) { return e.which === 1; };

// Determines whether the given click event args was
// from the Right mouse button.
// @param e: The arguments from the click event.
Util.isRightClick = function (e) { return e.which === 3; };
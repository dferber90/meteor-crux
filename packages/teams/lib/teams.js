var defaults = stampit().state({
	_id: '',
	name: ''
});


var teamMembership = stampit({
	addMember: function (userId, cb) {
		Meteor.call('team/member/add', this._id, userId, cb);
		return this;
	},

	removeMember: function (userId, cb) {
		Meteor.call('team/member/remove', this._id, userId, cb);
		return this;
	}
}, {
	members: []
});

var teamAdminship = stampit({
	addAdmin: function (userId, cb) {
		Meteor.call('team/admin/add', this._id, userId, cb);
		return this;
	},

	removeAdmin: function (userId, cb) {
		Meteor.call('team/admin/remove', this._id, userId, cb);
	}
}, {
	admins: []
});


teamFactory = stampit.compose(
	defaults,
	teamMembership,
	teamAdminship
);

Teams = new Mongo.Collection('teams', {
	transform: function (doc) {
		return teamFactory(doc);
	}
});

// --- static methods --

var staticMethods = {
	add: function (name, cb) {
		Meteor.call('team/add', name, cb);
	},

	delete: function (teamId, cb) {
		Meteor.call('team/delete', teamId, cb);
	}
};

_.extend(Teams, staticMethods);
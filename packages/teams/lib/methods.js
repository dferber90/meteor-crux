Meteor.methods({

	'team/add': function (name) {
		check(name, String);
		// check(this.userId, String);

		Teams.insert({
			name: name,
			admins: [this.userId],
			members: []
		});
	},

	'team/delete': function (teamId) {
		check(teamId, String);
		Teams.remove({
			_id: teamId,
			admins: this.userId
		});
	},

	'team/member/add': function (teamId, memberId) {
		check([teamId, memberId, this.userId], [String]);

		Teams.update(
			{
				_id: teamId,
				admins: this.userId,
			}, {
				$addToSet: {
					members: memberId
				}
			}
		);
	},

	'team/member/remove': function (teamId, memberId) {
		check([teamId, memberId, this.userId], [String]);

		Teams.update(
			{
				_id: teamId,
				admins: this.userId
			}, {
				$pull: {
					members: memberId
				}
			}
		);
	}
});
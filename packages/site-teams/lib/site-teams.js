Template.siteTeams.events({
	'submit form': function (e, t) {
		e.preventDefault();

		var teamNameElement = t.find('input[name=team-name]');


		Teams.add(teamNameElement.value, function (err, res) {
			if (err) {
				throw err;
			}

			teamNameElement.value = '';
		});
	}
})
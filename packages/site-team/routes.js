Router.route('/team/:_id',
	function () {
		var teamId = this.params._id,
			team = Teams.findOne({ _id: teamId });

  		this.render('siteTeam', {
  			data: {
  				team: team
  			}
  		});
	},
	{
		name: 'team'
	}
);
Router.route('/teams',
	function () {
		var teams = Teams.find();

  		this.render('siteTeams', {
  			data: {
  				teams: teams
  			}
  		});
	},
	{
		name: 'teams'
	}
);
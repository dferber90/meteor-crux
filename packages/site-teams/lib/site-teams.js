Template.siteTeams.events({
	'submit form': function (event, instance) {
		event.preventDefault();

		var $submitButton = instance.$('button'),
			submitButtonWidth = $submitButton.width();
		$submitButton.width(submitButtonWidth);


		var submitButtonCtrl = Ctrl.fromElement($submitButton);
		var label = submitButtonCtrl.label();
		submitButtonCtrl.label('Saving..');

		var teamNameElement = instance.find('input[name=team-name]');
		var teamNameCtrl = Ctrl.fromElement(instance.find('input[name=team-name]'));


		Teams.add(teamNameCtrl.text(), function (err, res) {
			setTimeout(function () {
				submitButtonCtrl.label(label);
				$submitButton.width('auto');
			}, 600);

			if (err) {
				throw err;
			}

			teamNameCtrl.text('');
		});
	}
});

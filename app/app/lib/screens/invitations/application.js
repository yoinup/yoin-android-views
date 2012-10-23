App = Me.Application.create({

	run: function() {

		this._super();

		var self = this,
				invitations = this.store.find(Yn.Invitation, {'limit': 3});


		invitations.addObserver('isLoaded', function(item) {

			self.view = Yvw.InvitationsScreenView.create({
				invitations: invitations
			});
			self.view.appendTo('#app');

		});

	}

});

App = Me.Application.create({

	run: function() {

		this._super();

		var self = this,
				invitation = this.store.find(Yn.Invitation, 1),
				user = this.store.find(Yn.User, 17 );

		invitation.addObserver('isLoaded', function(item) {

			user.addObserver('isLoaded', function(item) {

				self.view = Yvw.QrScreenView.create({
					selectedUnexchangedInvitation: null,
					user: user
				});
				self.view.appendTo('#app');

			});

		});

	}

});

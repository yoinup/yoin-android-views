App = Me.Application.create({

	run: function() {

		this._super();

		var self = this,
				invitation = this.store.find(Yn.Invitation, 1);

		invitation.addObserver('isLoaded', function(item) {

			self.view = Yvw.QrScreenView.create({
				invitation: null
			});
			self.view.appendTo('#app');

		});

	}

});

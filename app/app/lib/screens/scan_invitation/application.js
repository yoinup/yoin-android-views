
App = Me.Application.create({

	run: function() {

		this.loadData();

		var self = this,
        userId = 17,
        invitationId = 1,
				invitation = App.store.find(Yn.Invitation, invitationId);

		invitation.one('didLoad', function(item) {

      self.view = Yvi.ScanInvitationScreenView.create({
        invitation: invitation
      });

			self.view.appendTo('#app');

		});

		this.footer = Yvi.FooterView.create({
			currentTabView: 'qr'
		});

		this.footer.appendTo('#app');

	}

});

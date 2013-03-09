
App = Me.Application.create({

	run: function() {

		this.loadData();

		var self = this,
        userId = 17,
        invitationId = 1,
				invitation = App.store.find(Yn.Invitation, invitationId);

		invitation.one('didLoad', function(item) {

      self.footer = Yva.FooterView.create({
        currentTabView: 'qr'
      });

      self.footer.one('didInsertElement', function() {

        self.view = Yvi.ScanInvitationScreenView.create({
          invitation: invitation
        });

        self.view.appendTo('#app');

      });

      self.footer.appendTo('#app');


		});



	}

});

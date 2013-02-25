
App = Me.Application.create({

	run: function() {

		this.loadData();

		var self = this,
        userId = 17,
        invitationId = 1,
        //invitationId = 3, // no comments
        loggedUser,
				invitation = App.store.find(Yn.Invitation, invitationId);

		invitation.one('didLoad', function(item) {

      invitation.get('comments').one('didLoad', function(item) {

        loggedUser = App.store.find(Yn.User, userId);
        loggedUser.one('didLoad', function() {
          self.view = Yvi.InvitationScreenView.create({
            loggedUser: loggedUser,
            invitation: invitation,
						isAndroid: true
          });
          self.view.appendTo('#app');
        });

      });
		});

		self.footer = Yva.FooterView.create({
			currentTabView: 'me'
		});
		self.footer.appendTo('#app');

	}

});

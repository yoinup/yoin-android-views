
App = Me.Application.create({

	run: function() {

		this.loadData();

		var self = this,
				invitations;
    
    invitations = App.store.findMany(Yn.Invitation, [1,2,3,4,5]);
		invitations.one('didLoad', function(item) {
      
      console.log(invitations);
      // is loading
      //invitations = null;
      // is empty 
      invitations = Em.A([]);
      invitations.set('isLoaded', true);

      self.view = Yvi.WalletScreenView.create({
        invitations: invitations
      });

			self.view.appendTo('#app');

		});

		this.footer = Yva.FooterView.create({
			currentTabView: 'qr'
		});

		this.footer.appendTo('#app');

	}

});

App = Me.Application.create({

	run: function() {

		this.loadData();

    var self = this,
        user = this.store.find(Yn.User, 17);


    user.one('didLoad', function(item) {

      self.view = Yvi.NotificationScreenView.create({
        facebookUser: user
      });
      self.view.appendTo('#app');

    });

  }

});

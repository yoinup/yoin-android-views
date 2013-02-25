App = Me.Application.create({

	run: function() {

		this.loadData();

    var self = this,
        cities = this.store.findMany(Yn.City, [9,10,11]),
        user = this.store.find(Yn.User, 17);


    user.one('didLoad', function(item) {

      self.view = Yvi.SettingsScreenView.create({
        user: user,
        cities: cities
      });
      self.view.appendTo('#app');

    });

		this.footer = Yva.FooterView.create({});
		this.footer.appendTo('#app');
  }

});

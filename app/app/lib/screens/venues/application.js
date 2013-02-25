
App = Me.Application.create({

	run: function() {

		this.loadData();

    var self = this,
        venues,
        city,
        friends,
        loggedUser;

		this.footer = Yva.FooterView.create({
			currentTabView: 'venues'
		});

    city = App.store.find(Yn.City, 9);
    city.one('didLoad', function() {

      friends = App.store.findMany(Yn.Friend, [14]);
      //friends = App.store.findMany(Yn.Friend, [14, 15]);
      //friends = App.store.findMany(Yn.Friend, [14, 15, 16, 17]);
      friends.one('didLoad', function() {

        venues = App.store.findMany(Yn.Venue, [243]);
        venues.one('didLoad', function() {

          loggedUser = App.store.find(Yn.User, 14);
          loggedUser.one('didLoad', function() {

            self.view = Yvi.VenuesScreenView.create({
              content: venues,
              //content: Em.A([]),
              loggedUser: loggedUser,
              selectedCity: city,
              //username: 'ppcano',
              //user: loggedUser,
              isGeopositionOn: true,
              friends: friends,
              newFriends: friends,
              isRefreshed: false
            });

            self.footer.on('didInsertElement', function() {
              self.view.appendTo('#app');
            });

            self.footer.appendTo('#app');

          });
        });

      });

    });

  }

});

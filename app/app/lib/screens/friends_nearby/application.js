App = Me.Application.create({

  settings: {
    lang: 'en-GB',
    simulateRemoteResponse: true,
    simulateRemoteResponseLatency: 1
  },

	run: function() {

		this.loadData();

    var self = this,
        people,
        venue;

    people = App.store.findMany(Yn.User, [14,15,16,17]);
    people.one('didLoad', function() {

      venue = App.store.find(Yn.Venue, 236);
      venue.one('didLoad', function() {
        self.view = Yvi.FriendsNearbyScreenView.create({
          content: people,
          venue: venue,
          isLoaded: true
        });
        self.view.appendTo('#app');
      });

      self.footer = Yva.FooterView.create({
        currentTabView: 'me'
      });
      self.footer.appendTo('#app');
    });


  }

});

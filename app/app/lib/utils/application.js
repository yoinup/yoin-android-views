
Me.Application = Yn.Application.extend({

  settings: {
    lang: 'en-GB',
    simulateRemoteResponse: true,
    simulateRemoteResponseLatency: 100
  },

  _initStore: function() {

		this.store = DS.Store.create({
			revision: 11,
      adapter: 'DS.FixtureAdapter'
		});

  },

  runIfPossible: function() {
		
		if ( this.isAppReady && this.isReady ) {
			this.run();
		}

  },

  loadData: function() {

    App.store.findQuery(Yn.Category, {});
    App.store.findQuery(Yn.Product, {});
    App.store.findQuery(Yn.Brand, {});
    App.store.findQuery(Yn.Venue, {});
    App.store.findQuery(Yn.City, {});
    App.store.findQuery(Yn.FbChannel, {});
    App.store.findQuery(Yn.PhoneChannel, {});

    App.store.findQuery(Yn.User, {});
    App.store.findQuery(Yn.Like, {});
    App.store.findQuery(Yn.Comment, {});
    App.store.findQuery(Yn.Invitation, {});
    App.store.findQuery(Yn.Activity, {});


  }

});

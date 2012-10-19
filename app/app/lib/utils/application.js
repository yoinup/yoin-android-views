
Me.Application = Yn.Application.extend({

  settings: {
    lang: 'en-GB',
    simulateRemoteResponse: true,
    simulateRemoteResponseLatency: 100
  },

  _initStore: function() {

    this.store = DS.Store.create({
      revision: 4,
      adapter: Yn.FixtureAdapter.create({
        simulateRemoteResponse: this.settings.simulateRemoteResponse,
        latency: this.settings.simulateRemoteResponseLatency
      })
    });

  },

  run: function() {

  }

});

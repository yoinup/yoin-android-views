App = Me.Application.create({

	run: function() {

		this.loadData();

    var self = this,
        product,
        user = this.store.find(Yn.User, 17),
        venue = this.store.find(Yn.Venue, 275),
        venues = App.store.findMany(Yn.Venue, [275, 235, 248]),
        invitation = this.store.find(Yn.Invitation, 1),
        facebookUser = {name: "Pepe Cano", id: "edipotrebol"},
        agendaUser = {name: "Luis Sánchez Ruíz", avatar: null};


    venue.one('didLoad', function(item) {

      product = venue.get('products').get('firstObject');

      self.view = Yvi.InviteScreenView.create({
        product: product,
        //invitation: invitation,
        venue: venue,
        //venues: venues,
        isExecutingAction: true,
        username: 'ppcanodehuelva',
        user: user,
        agendaUser: null,
        facebookUser: null
      });

      self.view.appendTo('#app');

    });

  }

});

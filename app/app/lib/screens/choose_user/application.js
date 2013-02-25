App = Me.Application.create({

  loginFB: false,

	run: function() {

		this.loadData();

    var self = this,
        venue,
        friendUsers,
        nearUsers,
        agendaUsers,
        fbUsers,
        user;


    agendaUsers = Ember.A( [
      {name: "Diego Muñoz", number: "111 222 3333"},
      {name: "Pepe Cano", number: "444 555 6666"},
      {name: "Ale López", number: "222 555 6666"},
      {name: "Carlos Lagares", number: "333 444 6666"},
      {name: "John Doe", number: "444 555 2222"},
      {name: "Foo Bar", number: "111 333 6666"},
      {name: "Periquito Gómez", number: "222 555 8888"},
      {name: "Manolito Fernández", number: "444 888 6666"},
      {name: "Juan Castigo", number: "333 555 6666"},
      {name: "Otro Prueba", number: "233 555 6666"},
      {name: "Otro Nuevo", number: "233 555 6666"}
    ]);

    fbUsers = Ember.A( [
      {name: "Juan Castigo", id: "111222"},
      {name: "Damian Sanchez", id: "222333"},
      {name: "Pablo Martín", id: "edipotrebol"}
    ]);

    var userId;
    
    userId = 16; // with validated phone
    userId = 14; // without validated phone
    userId = 17; // without PhoneChannels

    user = self.store.find(Yn.User, userId);
    user.one('didLoad', function(item) {
      friendUsers = this.store.findMany(Yn.Friend, [14,15,16]);
      friendUsers.one('didLoad', function(item) {
        venue = App.store.find(Yn.Venue, 236);
        venue.one('didLoad', function(item) {

          user.set('fbChannel', null);
          fbUsers = Em.A([]);
          fbUsers.set('isLoaded', true);
          friendUsers = Em.A([]);
          friendUsers.set('isLoaded', true);

          self.view = Yvi.ChooseUserScreenView.create({
            user: user,
            option: Yvi.ChooseUserOption.facebook, // facebook yoin,

            yoinContent: friendUsers,
            facebookContent: fbUsers

          });
          self.view.appendTo('#app');

        });
      });
    });

  }

});

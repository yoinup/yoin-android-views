App = Me.Application.create({

	run: function() {

		this._super();

    var self = this,
        user = this.store.find(Yn.User, 17);

    user.addObserver('isLoaded', function() {

      self.view = Em.View.create({
				elementId: 'edipotrebol-a-ver-si-te-afeitas',
				didInsertElement: function() {
					this.$().text('A ver si te afeitas no? ');

				}
      });

      self.view.appendTo('#app');

    });

  }

});

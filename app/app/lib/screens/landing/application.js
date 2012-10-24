App = Me.Application.create({

	run: function() {

		this._super();

    var self = this;
    
    self.view = Yvw.LandingScreenView.create({});
		self.view.appendTo('#app');

  }

});

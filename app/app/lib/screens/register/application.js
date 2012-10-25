App = Me.Application.create({

	run: function() {

		this._super();

		var self = this;
		
	self.view = Yvw.RegisterScreenView.create({});
		self.view.appendTo('#app');

	}

});

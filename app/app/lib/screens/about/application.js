App = Me.Application.create({

	run: function() {

		this.loadData();

		var self = this;
		
		self.view = Yvi.AboutScreenView.create({});
		self.view.appendTo('#app');

	}

});

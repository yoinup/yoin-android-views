App = Me.Application.create({

	run: function() {

		this.loadData();

		var self = this;
		
		self.view = Yva.RegisterScreenView.create({});
		self.view.appendTo('#app');

	}

});

App = Me.Application.create({

	run: function() {

		this.loadData();

    var self = this;
    self.view = Yvi.LoginScreenView.create({});
		self.view.appendTo('#app');

  }

});

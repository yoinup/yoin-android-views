App = Me.Application.create({

	run: function() {

		this.loadData();
    var self = this;

    self.view = Yvi.TermsScreenView.create({
			hasFooter: false
    });
    self.view.appendTo('#app');

  }

});

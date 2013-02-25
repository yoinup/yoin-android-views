App = Me.Application.create({

	run: function() {

		this.loadData();
    var self = this;

    self.view = Yvi.LegalScreenView.create({
      isPrivacy: false
    });
    self.view.appendTo('#app');

  }

});

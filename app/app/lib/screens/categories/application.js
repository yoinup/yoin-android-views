App = Me.Application.create({

	run: function() {

		this.loadData();
    var self = this;

    self.view = Yvi.CategoriesScreenView.create({
      orderCategories: App.store.findMany(Yn.Category, [2,3,4,5]),
      freeCategory: App.store.find(Yn.Category, 1),
      isLoaded: true
    });
    self.view.appendTo('#app');


  }

});

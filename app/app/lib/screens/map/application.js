
App = Me.Application.create({

	run: function() {

		this.loadData();

    var venues,
        venue,
        self = this,
        selectedCity = this.store.find(Yn.City, 9),
        cities = this.store.findMany(Yn.City, [9,10,11,12,13]),
        me;

    cities.one('didLoad', function() {

			var mapView = Yvi.MapView.create({

				didMapReady: function() {
					this.showVenues(me, venues);
				},

				clickVenuesBubble: function(venue) {
					console.log('click ' + venue.get('address') );
				}

			});


			venues = this.store.find(Yn.Venue, {});
			venues.one('didLoad', function() {

				venue = venues.get('firstObject');
				me = { lat: venue.get('lat')+0.001,
							 lon: venue.get('lon')+0.001 };

				self.view = Yvi.MapScreenView.create({
					selectedCity: selectedCity,
					cities: cities,
					isAsideBack: true,

					didInsertElement: function() {

						this._setContainerMapView();
						this._setLayout();
						this.containerMapView
								.get('childViews')
								.pushObject(mapView);

					}

				});

				self.view.appendTo('#app');

			});
    });


  }

});

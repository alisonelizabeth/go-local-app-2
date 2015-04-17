define([
	'marionette',
	'views/Banner',
	'channel',
	'views/PlaceCollection',
  	'views/PlaceItem',
  	'models/Place',
  	'collections/Places'
],
  function(Marionette, BannerView, channel, PlaceCollectionView, PlaceItemView, Place, Places) {
    var HomeLayoutView = Marionette.LayoutView.extend({
    	template: 'home',
    	regions: {
	  		banner: '#banner',
	  		spotlight: '#spotlight'
	  	},
		onBeforeShow: function(){
			var self = this;
	      	var query = new Parse.Query(Place);
			this.getRegion('banner').show(new BannerView());

			query.limit(3);
			query.descending('createdAt');
			query.find().then(function(results){
				var placeCollection = new Places(results);
		        var placeCollectionView = new PlaceCollectionView({collection: placeCollection});
		        self.getRegion('spotlight').show(placeCollectionView);
		      }, function(error){
		        console.log(error.description);
		    });
		}
	});
	return HomeLayoutView;
  });
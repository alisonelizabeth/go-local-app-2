define([
	'marionette',
	'channel',
	'store',
	'views/PlaceCollection'],
  function(Marionette, channel, store, PlaceCollectionView) {
    var HomeLayoutView = Marionette.LayoutView.extend({
    	template: 'places',
    	regions: {
	  		places: '#places'
	  	},
	  	initialize: function(){
	  		console.log('init home PlacesLayoutView');
	  		channel.command('read:places');
	  		this.listenTo(channel, 'places:read', this.showSpotlight);
	  	},
		showSpotlight: function(data){
		    var placeCollectionView = new PlaceCollectionView({collection: data});
		    this.getRegion('places').show(placeCollectionView);
		}
	});
	return HomeLayoutView;
  });
define([
	'marionette',
	'views/Banner',
	'channel',
	'store',
	'views/PlaceCollection'],
  function(Marionette, BannerView, channel, store, PlaceCollectionView) {
    var HomeLayoutView = Marionette.LayoutView.extend({
    	template: 'home',
    	regions: {
	  		banner: '#banner',
	  		spotlight: '#spotlight'
	  	},
	  	initialize: function(){
	  		channel.command('read:home');
	  		this.listenTo(channel, 'home:read', this.showSpotlight);
	  	},
		onBeforeShow: function(){
			this.getRegion('banner').show(new BannerView());
		},
		showSpotlight: function(data){
		    var placeCollectionView = new PlaceCollectionView({collection: data});
		    this.getRegion('spotlight').show(placeCollectionView);
		}
	});
	return HomeLayoutView;
  });
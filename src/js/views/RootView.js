define([
	'marionette',
	'views/Header',
	'views/Footer',
	'channel'],
  function(Marionette, HeaderView, FooterView, channel) {
    var RootView = Marionette.LayoutView.extend({
    	el: 'body',
    	regions: {
	  		header: '#header',
	  		content: '#main-content',
	  		footer: '#footer'
	  	},
	  	initialize: function(){
	  		var self = this;
	  		this.getRegion('header').show(new HeaderView());
		    this.getRegion('footer').show(new FooterView());
		  	channel.comply('set:content',function(ContentView) {
		  		self.getRegion('content').show(new ContentView());
		   	});
		}
	});
	return RootView;
  });
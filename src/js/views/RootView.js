define([
	'marionette',
	'views/Header',
	'views/Footer'
],
  function(Marionette, HeaderView, FooterView) {
    var RootView = Marionette.LayoutView.extend({
    	el: 'body',
    	regions: {
	  		header: '#header',
	  		content: '#main-content',
	  		footer: '#footer'
	  	},
	  	initialize: function(){
	  		console.log('init root view');
	  		this.getRegion('header').show(new HeaderView());
		    this.getRegion('footer').show(new FooterView());
		  	// Radio.channel('root').comply('set:content',function(contentView) {
		   	//      this.getRegion('content').show(contentView);
		   	//  });
		}
		// onBeforeShow: function(){
		// 	console.log('onBeforeShow');
		// 	this.getRegion('header').show(new HeaderView());
		//     this.getRegion('footer').show(new FooterView());
  //   		// this.getRegion('content').show(new IndexView());
		// }

	});
	return RootView;
  });
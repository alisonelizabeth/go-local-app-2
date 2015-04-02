define([
	'underscore',
	'backbone',
	'marionette',
	'dustjs-linkedin',
	'dustMarionette'],
  function(_, Backbone, Marionette) {
    var PlaceItemView = Backbone.Marionette.ItemView.extend({
	  template: 'spotlight',
	  initialize: function(){
	  	console.log('init item view');
	  }
	});
	return PlaceItemView;
  });
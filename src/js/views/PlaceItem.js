define(['marionette'],
  function(Marionette) {
    var PlaceItemView = Marionette.ItemView.extend({
	  template: 'spotlight',
	  initialize:function(){
	  	console.log('init item view');
	  }
	});
	return PlaceItemView;
  });
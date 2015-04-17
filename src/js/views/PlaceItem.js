define(['marionette'],
  function(Marionette) {
    var PlaceItemView = Marionette.ItemView.extend({
	  template: 'spotlight',
	  initialize:function(){
	  	console.log('init spotlight view');
	  }
	});
	return PlaceItemView;
  });
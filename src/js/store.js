define([
	'marionette',
	'channel',
	'models/Place',
	'collections/Places'],
  function(Marionette, channel, Place, Places) {

  	channel.comply('read:home', function(){
  		console.log('read home');
      	var query = new Parse.Query(Place);

		query.limit(3);
		query.descending('createdAt');
		query.find().then(function(results){
			var placeSpotlightCollection = new Places(results);
			channel.trigger('home:read', placeSpotlightCollection);
	      }, function(error){
	        console.log(error.description);
	    });
  	});

  	channel.comply('read:places', function(){
  		console.log('read places');
      	var query = new Parse.Query(Place);
		query.find().then(function(results){
			var placeCollection = new Places(results);
			channel.trigger('places:read', placeCollection);
	      }, function(error){
	        console.log(error.description);
	    });
  	});
  });
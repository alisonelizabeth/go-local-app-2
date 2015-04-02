define([
  'underscore',
  'marionette',
  'views/PlaceCollection',
  'models/Place',
  'collections/Places'
  ], function (_, Marionette, PlaceCollectionView, Place, Places) {
  var Router = Marionette.AppRouter.extend({
    routes: {
      '': 'home'
    },
    initialize: function(){
      console.log('init route');
    },
    home: function(){
      console.log('home route');
      var query = new Parse.Query(Place);

      query.limit(3);
      query.descending('createdAt');
      query.find({
        success:function(results){
          var placeCollection = new Places(results);
          console.log(placeCollection);
          var placeCollectionView = new PlaceCollectionView({collection: placeCollection});
        },
        error: function(results, error){
          console.log(error.description)
        }
      });
    }
  });
 
  return Router;
});
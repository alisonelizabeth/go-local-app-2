define([
  'underscore',
  'marionette',
  'views/PlaceCollection',
  'views/PlaceItem',
  'models/Place',
  'collections/Places'
  ], function (_, Marionette, PlaceCollectionView, PlaceItemView, Place, Places) {
  var Router = Marionette.AppRouter.extend({
    routes: {
      '': 'home'
    },
    initialize: function(options){
      this.app = options.app;
    },
    home: function(){
      console.log('home route');
      var self = this;
      var query = new Parse.Query(Place);

      this.app.addRegions({
          mainRegion: '#spotlight'
      });

      query.limit(3);
      query.descending('createdAt');
      query.find({
        success:function(results){
          var placeCollection = new Places(results);
          var placeCollectionView = new PlaceCollectionView({collection: placeCollection});
          self.app.mainRegion.show(placeCollectionView);
        },
        error: function(results, error){
          console.log(error.description)
        }
      });
    }
  });
 
  return Router;
});
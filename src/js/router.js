define([
  'underscore',
  'marionette',
  'views/PlaceCollection',
  'views/PlaceItem',
  'models/Place',
  'collections/Places',
  'views/RootView'
  ], function (_, Marionette, PlaceCollectionView, PlaceItemView, Place, Places, RootView) {
  var Router = Marionette.AppRouter.extend({
    routes: {
      '': 'home',
      'places': 'showPlaces',
      'places/:id': 'showPlace'
    },
    initialize: function(options){
      this.app = options.app;
      this.app.rootView = new RootView();
      this.places = new Places();
    },
    home: function(){
      console.log('home route');


      // var self = this;
      // var query = new Parse.Query(Place);
      

      // TODO: create layoutview
      // this.app.addRegions({
      //     mainRegion: '#spotlight > .row'
      // });

      // query.limit(3);
      // query.descending('createdAt');
      // query.find().then(function(results){
      //   var placeCollection = new Places(results);
      //   var placeCollectionView = new PlaceCollectionView({collection: placeCollection});
      //   self.app.mainRegion.show(placeCollectionView);
      // }, function(error){
      //   console.log(error.description);
      // });
    },
    showPlaces: function(){
      console.log('places route');
      var self = this;
      // TODO: create layoutview
      this.app.addRegions({
          mainRegion: '#spotlight > .row'
      });

      this.places.fetch({
        success: function(places) {
          console.log(places);
          var placeCollection = new Places(places);
          var placeCollectionView = new PlaceCollectionView({collection: placeCollection});
          self.app.mainRegion.show(placeCollectionView);
        },
        error: function(error){
          console.log(error.description);
        }
      });
    },
    showPlace: function(){
      console.log('place route');
    }
  });
 
  return Router;
});
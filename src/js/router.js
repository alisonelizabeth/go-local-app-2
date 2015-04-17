define([
  'underscore',
  'marionette',
  'collections/Places',
  'views/RootView',
  'views/HomeLayout',
  'channel'
  ], function (_, Marionette, Places, RootView, HomeLayoutView, channel) {
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
      channel.command('set:content', HomeLayoutView);
    },
    showPlaces: function(){
      console.log('places route');
      // var self = this;

      // this.places.fetch({
      //   success: function(places) {
      //     console.log(places);
      //     var placeCollection = new Places(places);
      //     var placeCollectionView = new PlaceCollectionView({collection: placeCollection});
      //     self.app.mainRegion.show(placeCollectionView);
      //   },
      //   error: function(error){
      //     console.log(error.description);
      //   }
      // });
    },
    showPlace: function(){
      console.log('place route');
    }
  });
 
  return Router;
});
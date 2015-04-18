define([
  'underscore',
  'marionette',
  'collections/Places',
  'views/RootView',
  'views/HomeLayout',
  'views/PlacesLayout',
  'channel'
  ], function (_, Marionette, Places, RootView, HomeLayoutView, PlacesLayoutView, channel) {
  var Router = Marionette.AppRouter.extend({
    routes: {
      '': 'home',
      'places': 'showPlaces',
      'places/:id': 'showPlace',
      'places/add': 'addPlace'
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
      channel.command('set:content', PlacesLayoutView);
    },
    showPlace: function(){
      console.log('place route');
    },
    addPlace: function(){
      console.log('add route');
    }
  });
 
  return Router;
});
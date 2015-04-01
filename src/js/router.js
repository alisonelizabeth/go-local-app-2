define([
  'underscore',
  'marionette',
  'home/controller',
  'models/Place',
  'collections/Places'
  ], function (_, Marionette, HomeView, Place, Places) {
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
          console.log(results);
          _.each(results, function(result){
            var homeView = new HomeView();
            homeView.render(result);
          });
      },
        error: function(results, error){
          console.log(error.description)
        }
      });
    }
  });
 
  return Router;
});
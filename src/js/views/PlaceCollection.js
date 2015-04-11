define([
  'jquery',
  'marionette',
  'backbone',
  'views/PlaceItem',
  'templates',
  'dustMarionette'],
  function($, Marionette, Backbone, PlaceItemView) {
    var PlaceCollectionView = Backbone.Marionette.CollectionView.extend({
        childView: PlaceItemView,

        initialize: function(options){
          console.log('init collection view');
          console.log(options);
        }

        // getChildView: function(item){
        //   console.log('get view');
        //   console.log(item);
        //   return PlaceItemView;
        // }
    });
    return PlaceCollectionView;
  });

// define([
//   'dustjs-linkedin',
//   'jquery',
//   'underscore',
//   'backbone'
// ], function(dust, $, _, Backbone){
//   var HomeView = Backbone.View.extend({
//     el: $('#spotlight'),
//     template: 'spotlight',
//     tagName: '.col-md-3',
//     render: function(context){
//       console.log(context.toJSON());
//       var ouput;
//       dust.render(this.template, context.toJSON(), function(err, out) {
//         output = out;
//       });
//       this.$el.append(output);
//     }
//   });
//   return HomeView;
// });
define([
  'underscore',
  'backbone',
  'marionette',
  'views/PlaceItem'],
  function(_, Backbone, Marionette, PlaceItemView) {
    var PlaceCollectionView = Backbone.Marionette.CollectionView.extend({
        itemView: PlaceItemView,
        initialize: function(){
          console.log('init CollectionView');
          console.log(this);
        }
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
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
        }
    });
    return PlaceCollectionView;
  });
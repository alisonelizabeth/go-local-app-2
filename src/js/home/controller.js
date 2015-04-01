// define(['marionette'],
//   function(Marionette) {
//       //ItemView provides some default rendering logic
//       return Backbone.Marionette.ItemView.extend( {
//           template: template,
//           // model: new Model({
//           //     mobile: App.mobile
//           // }),

//           // View Event Handlers
//           events: {

//           }
//       });
//   });


define([
  'dustjs-linkedin',
  'jquery',
  'underscore',
  'backbone'
], function(dust, $, _, Backbone){
  var HomeView = Backbone.View.extend({
    el: $('#spotlight'),
    template: 'spotlight',
    tagName: '.col-md-3',
    render: function(context){
      console.log(context.toJSON());
      var ouput;
      dust.render(this.template, context.toJSON(), function(err, out) {
        output = out;
      });
      this.$el.append(output);
    }
  });
  return HomeView;
});
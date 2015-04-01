define([
    'underscore',
    'backbone',
    'parse',
    'models/Place'
], function(_, Backbone, Parse, Place) {
    var Places = Parse.Collection.extend({
        model: Place
    });
    return Places;
});
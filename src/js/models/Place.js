define([
    'underscore',
    'backbone',
    'parse'
], function(_, Backbone, Parse) {
    var Place = Parse.Object.extend('LocalClass');
    return Place;
});
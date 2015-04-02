define([
    'underscore',
    'backbone',
    'parse',
    'models/Comment'
], function(_, Backbone, Parse, Comment) {
    var Comments = Parse.Collection.extend({
		model: Comment
	});
    return Comments;
});
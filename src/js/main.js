require.config({
  paths: {
    jquery: '/public/js/vendor/jquery/dist/jquery.min',
    underscore: '/public/js/vendor/underscore/underscore',
    backbone: '/public/js/vendor/backbone/backbone',
    parse: '/public/js/vendor/parse/build/parse-latest',
    marionette: '/public/js/vendor/backbone.marionette/lib/backbone.marionette',
    dustMarionette: '/public/js/vendor/backbone.marionette.dust/src/backbone.marionette.dust',
    templates: '/public/js/compiled-templates-amd',
    'dustjs-linkedin': '/public/js/vendor/dustjs-linkedin/dist/dust-core'
  },
  shim: {
  	parse: {
        deps: ['jquery', 'underscore'],
        exports: 'Parse'
    },
    jquery: {
        exports: 'jQuery'
    },
    underscore: {
        exports: '_'
    },
    backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
    },
    marionette: {
        deps: ['jquery', 'underscore', 'backbone'],
        exports: 'Marionette'
    },
    'dustjs-linkedin': {
        exports: 'dust'
    }
  }
});

require(['marionette', 'parse', 'router', 'templates'], function (Marionette, Parse, AppRouter) {
    var MyApp = new Marionette.Application();
    Parse.initialize('odceeKZIPEFi25d3RsOWBQqKz6QWTqJ1cckCkTnd', 'PwniGhD9YaeJgeBJQBdPTgPcTUfHdR5zANaNyfOE');
    MyApp.on('start', function() {
	  	var router = new AppRouter();
	  	Backbone.history.start();
	});
 
    MyApp.start({});
});
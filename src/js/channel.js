define(['backbone', 'radio'],
  function(Backbone) {
    var channel = Backbone.Radio.channel('root');
	return channel;
  });
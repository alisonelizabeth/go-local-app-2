'use-strict';
var express = require('express');
var app = express();
var dust = require('dustjs-linkedin');
var path = require('path');
var _static = require('serve-static');
var cons = require('consolidate');

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/src/templates');

app.get('/', function(req, res){
	res.render('index', {}, function(error, output){
		res.end(output);
	});
});

app.use('/public/js/vendor', _static(path.join(process.cwd(), 'node_modules')));
app.use('/public/js', _static(path.join(process.cwd(), 'src/js')));
app.use('/public/js', _static(path.join(process.cwd(), 'dist')));

app.listen(3000, console.log.bind(null, 'Running at Port 3000'));
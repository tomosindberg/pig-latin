var express = require( 'express' ),
  path = require( 'path' ),
	bodyparser = require( 'body-parser' ),
  app = express(),

	translator = require( './lib/translator.js' ),
  translatorS = require('./lib/swed.js'),

	publicDirectory = path.join( __dirname, 'public' ),
	port = 3000;


app.use( express.static( publicDirectory ) );
app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( { extended: true } ) );

app.listen(port, function() {
  console.log('app server started on port', port);
});

app.post( '/translate', function ( req, res ) {
	var translated = translator( req.body.text );
	res.json( { piglatin: translated } );
});

app.post( '/swed', function ( req, res ) {
  var translatedS = translatorS( req.body.text );
  res.json( { swedish: translatedS } );
});

//checking git
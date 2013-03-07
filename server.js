var
  express  = require( 'express' ),
  app      = express(),
  poet     = require( 'poet' )( app );

// All default options, but shown for example

poet
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ));
app.use( app.router );
app.configure('development', function(){
  app.use(express.errorHandler());
  app.locals.pretty = true;
});

app.get( '/', function ( req, res ) { res.render( 'index' ); });

app.listen( process.env.PORT || 3000 );
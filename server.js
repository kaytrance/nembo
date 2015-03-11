// init main server components
var express        = require( "express" );
var compression    = require( "compression" );
var consolidate    = require( "consolidate" );
var cookieParser   = require( "cookie-parser" );
var session        = require( "express-session" );
var bodyParser     = require( "body-parser" );
var methodOverride = require( "method-override" );
var MongoStore     = require( "connect-mongo" )( session );
var mongoose       = require( "mongoose" );
var app            = express();
var http           = require( "http" );

// init logger
var log4js         = require( "log4js" );
var log            = log4js.getLogger( "server" );

// init other components
var _              = require("underscore");
global.CONFIG      = require("./config.js").settings;






// CONFIGURE EXPRESS APP
app.set( "views", __dirname + "/build/views");

app.engine( "ejs", consolidate.ejs );
app.engine( "jade", consolidate.jade );

app.use( compression() );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
	extended: true,
	limit: 1024 * 1024 * 1          // limit request to 1MB
}));
app.use( methodOverride() );
// app.use( session({
// 	secret: "thisisveryconfidentialinformation",
// 	maxAge: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),     // set session max age to 5 days
// 	store : new MongoStore(global.CONFIG.dbsettings),
// 	resave:             true,
// 	saveUninitialized:  true
// }));
app.use( express.static( __dirname + "/build" ) );






// ========================================================================
// R O U T E S 
// ========================================================================
app.get( "/", function( req, res, next ) {
	res.render( "index.jade", { title: "test title" } );
});





// ========================================================================
// L A U N C H   S E R V E R
// ========================================================================
var httpServer = http.createServer( app ).listen( process.env.PORT, process.env.IP || "0.0.0.0", function() {
	log.trace( "Launching server" );
	log.trace( "Server active at %s:%d", httpServer.address().address, httpServer.address().port );
});

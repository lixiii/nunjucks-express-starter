var express = require("express");

// CSRF protection
const csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });


exports.init = function(app) {
  // simple routes
  app.get( '/', csrfProtection, routeHome);

  //serve static asset files
  app.use('/assets', express.static('./assets'));

  // catch all
  app.get( '/*', function( req, res ) {
    return res.render( '404.html' ) ;
  } );
}

function routeHome( req, res ) {

  // do something here if required, ie check for redirects

  return res.render( 'home.njk', {
    csrfToken: req.csrfToken(),
  }) ;
  
}
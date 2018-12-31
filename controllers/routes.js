var express = require("express");
var router = express.Router();

// CSRF protection
const csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });


// simple routes
router.get( '/', csrfProtection, routeHome);

//serve static asset files
router.use('/assets', express.static('./assets'));

// catch all
router.get( '/*', function( req, res ) {
  return res.render( '404.html' ) ;
} );


function routeHome( req, res ) {

  // do something here if required, ie check for redirects

  return res.render( 'home.njk', {
    csrfToken: req.csrfToken(),
  }) ;
  
}

module.exports = router
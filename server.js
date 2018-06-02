//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

//Load HTTP module
var http = require("http");

app.get('/', function (req, res) {
  res.send('no op');
});
app.get('/gettoken', function (req, res) {
  //auth.authorizeRequest({/*...*/}, function (err, authorizedReqOpts) {});
  auth.getToken(function (err, token) { 
    if (req.headers.token!==process.env.APP_CODE)
      res.status(500).send('Something bad happened!'); 
    else
      res.json({"token": token});
  });
  
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

  var googleAuth = require('google-auto-auth');
 
  var authConfig = {};
   
  // path to a key:
  authConfig.keyFilename = 'key.json';
   /*
  // or a credentials object:
  authConfig.credentials = {
    client_email: '...',
    private_key: '...'
  };*/
  authConfig.scopes = ['https://www.googleapis.com/auth/cloud-platform']
  // Create a client
  var auth = googleAuth(authConfig);
//Load HTTP module
var http = require("http");
var dialogflow = require("dialogflow");
//Create HTTP server and listen on port 8000 for requests
http.createServer(function (request, response) {

   // Set the response HTTP header with HTTP status and Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/')
	
  var googleAuth = require('google-auto-auth');
 
  var authConfig = {};
   
  // path to a key:
  authConfig.keyFilename = '/Users/freedomson/projects/joao/tokenserver/key.json';
   /*
  // or a credentials object:
  authConfig.credentials = {
    client_email: '...',
    private_key: '...'
  };*/
  authConfig.scopes = ['https://www.googleapis.com/auth/cloud-platform']
  // Create a client
  var auth = googleAuth(authConfig);
   
  //auth.authorizeRequest({/*...*/}, function (err, authorizedReqOpts) {});
  auth.getToken(function (err, token) { console.log(token,err)});
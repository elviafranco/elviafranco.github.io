// const express = require('express');
// const app = express();

// app.get('/', (request, response)=>{

// })


 /* Load the HTTP library */
 var http = require("http");

 /* Create an HTTP server to handle responses */

 http.createServer(function(request, response) {
   response.writeHead(200, {"Content-Type": "text/plain"});
   response.write("Hello World");
   response.end();
 }).listen(8888);

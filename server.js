
"use strict";


// Port where we'll run the websocket server
var webSocketsServerPort = 1337;

// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');

var jsonfile = require('jsonfile');

var file = '/chat/ProductionDefinitions.json';
var ProductionDefinitions = jsonfile.readFileSync(file);

/**
 * Helper function for escaping input strings
 */
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}



/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
    // Not important for us. We're writing WebSocket server, not HTTP server
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
    // WebSocket server is tied to a HTTP server. WebSocket request is just
    // an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
    httpServer: server
});

// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    // accept connection - you should check 'request.origin' to make sure that
    // client is connecting from your website
    // (http://en.wikipedia.org/wiki/Same_origin_policy)
    var connection = request.accept(null, request.origin); 


    console.log((new Date()) + ' Connection accepted.');
    
    var PD = JSON.stringify({ type:'ProductionDefinitions', data: ProductionDefinitions });
   connection.sendUTF(PD);
    console.log('sent!');

    // user sent some message
    connection.on('message', function(message) {

// log and broadcast the message
                console.log((new Date()) + ' Received Message' + ':'+ message.utf8Data);
                


                // broadcast message to all connected clients
                var json = JSON.stringify({ type:'message', data: htmlEntities(message.utf8Data) });

                connection.sendUTF(json);
                
            
        
    });

    // user disconnected
    connection.on('close', function(connection) {
              console.log((new Date()) + " Peer "
                + connection.remoteAddress + " disconnected.");    });

});
// npm Setting
const express = require('express');
const https = require('http');

const app = express();
const http = https.Server( app );

const io = require('socket.io')( http );

// Server
app.use( express.static('public') );

io.on( 'connection', function( socket ){
});

http.listen( process.env.PORT || 3000, function(){
    console.log( 'Listening on Port 3000' );
});

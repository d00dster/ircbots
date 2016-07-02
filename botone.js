var irc = require('slate-irc');
var net = require('net');
// var SocksConnection = require('socksjs');
// var SockJS = require('sockjs-client');
//var ProxySocket = require('proxysocket');

var HOST = 'localhost';
var PORT = 4242;
var PASS = 'wooooooooooah';
var NICK = 'mockBOT';
var IDPW = 'danklies';
var CHAN = '#bots';
//var socket = new ProxySocket('127.0.0.1', 9050);

// var stream = socket.connect(HOST, PORT);

// var remote_options = {
//   port : PORT,
//   host : HOST,
//   //ssl : true
// }

// var sock_options = {
//   port : 9050
// }

// var connect_handler = {
  
// }

// var stream = new SocksConnection(remote_options, sock_options); 
// var stream = SocksConnection.connect(remote_options, sock_options, connect_handler);

var stream = net.connect({
  host: HOST,
  port: PORT
});

var client = irc(stream);

client.pass(PASS);
client.nick(NICK);
client.user(NICK, NICK);

setTimeout(function () {
  client.send('NickServ', 'IDENTIFY ' + IDPW);

  client.join(CHAN);

  client.names(CHAN, function (err, names) {
    console.log(names);
});


}, 4000);

client.on('message', function (msg) {
  if (msg.to[0] == '#') {
    if (msg.from == 'N30N') {
      client.send(msg.to, "^ Pleb");
    }
  } else {
      client.send(msg.from, ' Scrub');
  }  
});

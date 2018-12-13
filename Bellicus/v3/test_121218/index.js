var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*
socket : celui qui envoie au serveur
socket.broadcast : tous les autres
io : tout le monde
io.to(socketid); : cette personne
*/

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(require('express').static(__dirname + '/public'));


var clients = io.sockets.clients();

io.on('connection', function(socket){
  	console.log(socket.id + ' user connected');
  	console.log(clients);

  	//seulement pour celui qui se connecte
  	socket.emit('test', socket.id);

  	//le serveur sait qu'on se déconnecte
	socket.on('disconnect', function(){
    	console.log('user disconnected');
	});

	//quand le serveur reçoit un message informe tout le monde
  	socket.on('chat message', function(pseudo, msg){
    	console.log(socket.id + ' message: ' + msg);
    	io.emit('chat message', pseudo + " > " + msg);
  	});

  	//quand un joueur recherche un joueur on l'annonce à tout le monde
  	socket.on('recherche player', function(pseudo){
    	console.log(socket.id + ' recherche un adversaire');
    	io.emit('annoncer un joueur disponible', pseudo, socket.id);
  	});
});

http.listen(3000, function(){
  	console.log('listening on *:3000');
});

var listPlayer = new Map();
function addPlayerToList(pseudo, id){
	if(pseudo not in listPlayer){
		ListPlayer.append(pseudo)
	}
}
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
var listPlayerByPseudo = {};
var listPlayerByID = {};

io.on('connection', function(socket){
	//console.log(socket.id + ' user connected');
	//console.log(listPlayer);
  socket.emit('test', "premier test");
  socket.emit('ListPlayers', listPlayerByPseudo);
	
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

    socket.on('addPseudoToServer', function(pseudo){
      console.log("addPseudoToServer");
      if(addPlayerToList(pseudo, socket.id)){
        socket.emit('erreurPseudo');
      }else{
        console.log(listPlayerByPseudo);
        io.emit('majListPlayers', listPlayerByPseudo);
        socket.join(pseudo);
      }
    });

    socket.on('propositionDefiLancee', function(sender, id, pseudo){
      io.to(id).emit('yolo', sender, pseudo);
    });

    socket.on('relever', function(pseudo){
    	console.log(listPlayerByPseudo[pseudo]);
    	socket.join(pseudo);
    	io.to(pseudo).emit('commencer', pseudo);
    });

    socket.on('messageToRoom', function(message, room){
      console.log('messageToRoom');
      io.to(room).emit('chat message', room + " > " + message);
    });
});

http.listen(3000, function(){
  	console.log('listening on *:3000');
});

function addPlayerToList(pseudo, id){
  console.log(listPlayerByPseudo);
  console.log(pseudo);
	if(listPlayerByPseudo[pseudo] == undefined){
		if(listPlayerByID[id] == undefined){
      listPlayerByID[id] = pseudo;
      listPlayerByPseudo[pseudo] = id;
      return false;
    }else{
      console.log("ce joueur a deja un pseudo : " + listPlayerByID[id]);
    }

	}else{
    console.log("ce pseudo existe déjà");
  }
  return true; 
}

$(form_message).submit(function(){
    socket.emit('chat message', mePseudo, $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
  socket.on('yolo', function(player1, player2){
    document.getElementById("messages").innerHTML += (player2 + " vous a défier : <span class='blue' onclick='relever(`" + player2 + "`)'>RELEVER </span>"); 
  });
  socket.on('commencer', function(room){
    commencerLaPartie(room);
  });
  /*
  socket.on('annoncer un joueur disponible', function(pseudo, id){
      $('#listPlayer').append($("<li id=" + $('#listPlayer').length + " onclick='repondreALAnnonce(" + pseudo + ", " + meId + ", " + mePseudo + ")'>").text(pseudo));

  });*/

  socket.on('test', (msg) => {
    console.log("TEST");
    meId = msg;
    console.log(opponentPseudo);
    console.log(mePseudo);
    console.log(meId);
    socket.emit('recherche player', mePseudo);
  });

  socket.on('ListPlayers', function(listPlayer){
    console.log('Ici la liste des players');
    console.log(JSON.stringify(listPlayer));
    console.log(listPlayer);
  });
  
  socket.on('majListPlayers', function(listPlayer){
    console.log('Mise A jour de la liste joueur');
    console.log(listPlayer);
    $('#listPlayer').empty();
    for( var i in listPlayer){
      if(i == mePseudo){
        $('#listPlayer').append($(`<li>`).text(i));
      }else{
        var tempArgs = "'" + i + "', '" + listPlayer[i] + "', '" + mePseudo + "'";
        console.log(tempArgs);
        $('#listPlayer').append($(`<li onclick="repondreALAnnonce(${tempArgs})">`).text(i)); 
      }   
    }
  });

  socket.on('erreurPseudo', function(){
    console.log("probleme pseudo");
  });
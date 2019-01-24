function hideConnection() {
  var x = document.getElementById("inputConnection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function connectUser() {
  console.log("connectUser");
  mePseudo = document.getElementById('username').value;
  console.log(mePseudo)
  socket.emit('addPseudoToServer', mePseudo);
  hideConnection();
}
function repondreALAnnonce(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
  socket.emit('propositionDefiLancee',a,b,c);
}
function relever(pseudo){
  socket.emit('relever',pseudo);
}
function commencerLaPartie(room){
  meRoom = room;
  document.getElementById("board").innerHTML += "ça commence";
  document.getElementById("board").style.visibility = 'visible';
}
function alerterLaSalle(room, message){
  console.log("ALERT ROOM");
  socket.emit('messageToRoom', room, message);
}
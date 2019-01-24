function addElement(player, id, value){
  var element = "<button class='element p"+player+"' id=button" +id +" draggable='true' ondragstart='drag(event)' ondrop='drop(event)' ondragover='allowDrop(event)'>"+value+"</button>"
  return element
}
function createBoard(){
  var boardj1 = shuffle(createListElements());
  var boardj2 = shuffle(createListElements());
  var pions = boardj1.concat(boardj2);
  var finalBoard = "<div id='drag'>test</div><table>";
  var index = 0;
  var joueur = 1;
  finalBoard += "<tr>";
  for (colonne = 0; colonne < 5 ; colonne++){
    if(colonne == 2){
      finalBoard += "<td colspan='2' id=box"+index+">"+addElement(joueur,index, pions[index])+"</td>";
    }else{
      finalBoard += "<td id=box"+index+">"+addElement(joueur,index, pions[index])+"</td>";
    }
    index++;
  }
  finalBoard += "</tr>";
  for (ligne = 0; ligne < 6 ; ligne++){
    finalBoard += "<tr>";
    if(index == 23) joueur +=1;
    for (colonne = 0; colonne < 6 ; colonne++){
      finalBoard += "<td id=box"+index+">"+addElement(joueur,index, pions[index])+"</td>";

      index++;
      if(index == 23) joueur++;

    }
    finalBoard += "</tr>";
  }
  finalBoard += "<tr>";
  for (colonne = 0; colonne < 5 ; colonne++){
    if(colonne == 2){
      finalBoard += "<td colspan='2' id=box"+index+">"+addElement(joueur,index, pions[index])+"</td>";
    }else{
      finalBoard += "<td id=box"+index+">"+addElement(joueur,index, pions[index])+"</td>";
    }
    index++;
  }
  finalBoard += "</tr>";
  finalBoard += "</table>";
  document.getElementById("board").innerHTML = finalBoard;
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
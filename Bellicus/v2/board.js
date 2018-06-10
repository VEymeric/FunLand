function addElement(player, value){
  var element = "<button class='element p"+player+"' id=button" +value +" draggable='true' ondragstart='drag(event)' ondrop='drop(event)' ondragover='allowDrop(event)'>"+value+"</button>"
  return element
}
function createBoard(){
  var finalBoard = "<div id='drag'>test</div><table id='table'>";
  var index = 0;
  var joueur = 1;
  finalBoard += "<tr>";
  for (colonne = 0; colonne < 5 ; colonne++){
    if(colonne == 2){
      finalBoard += "<td colspan='2' id=box"+index+">"+addElement(joueur,index)+"</td>";
    }else{
      finalBoard += "<td id=box"+index+">"+addElement(joueur,index)+"</td>";
    }
    index++;
  }
  finalBoard += "</tr>";
  for (ligne = 0; ligne < 6 ; ligne++){
    finalBoard += "<tr>";
    for (colonne = 0; colonne < 6 ; colonne++){
      finalBoard += "<td id=box"+index+">"+addElement(joueur,index)+"</td>";
      index++;
      if(index == 23) joueur++;

    }
    finalBoard += "</tr>";
  }
  finalBoard += "<tr>";
  for (colonne = 0; colonne < 5 ; colonne++){
    if(colonne == 2){
      finalBoard += "<td colspan='2' id=box"+index+">"+addElement(joueur,index)+"</td>";
    }else{
      finalBoard += "<td id=box"+index+">"+addElement(joueur,index)+"</td>";
    }
    index++;
  }
  finalBoard += "</tr>";
  finalBoard += "</table>";
  document.getElementById("board").innerHTML = finalBoard;
}

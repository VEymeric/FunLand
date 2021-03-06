function createListElements(){
  list = ["3G","2G","1G","3S","2S","1S","3C","3C","2C","2C","1C","1C","Av","Av","Ta","Ta","Ch","Ou","Ou","At","Bo","Bo","Dr"];
  return list;
}

function convL2N(letters){
  if(letters == "3G") return 1;
  if(letters == "2G") return 2;
  if(letters == "1G") return 3;
  if(letters == "3S") return 4;
  if(letters == "2S") return 5;
  if(letters == "1S") return 6;
  if(letters == "3C") return 7;
  if(letters == "2C") return 8;
  if(letters == "1C") return 9;
  if(letters == "Av") return 10;
  if(letters == "Ta") return 11;
  if(letters == "Ch") return 12;
  if(letters == "Ou") return 13;
  if(letters == "At") return 14;
  if(letters == "Bo") return 15;
  if(letters == "Dr") return 16;
}

function convN2L(number){
  if(number == 1) return "3G";
  if(number == 2) return "2G";
  if(number == 3) return "1G";
  if(number == 4) return "3S";
  if(number == 5) return "2S";
  if(number == 6) return "1S";
  if(number == 7) return "3C";
  if(number == 8) return "2C";
  if(number == 9) return "1C";
  if(number == 10) return "Av";
  if(number == 11) return "Ta";
  if(number == 12) return "Ch";
  if(number == 13) return "Ou";
  if(number == 14) return "At";
  if(number == 15) return "Bo";
  if(number == 16) return "Dr";
}
function getMatriceWinners(){
  // 0 défaite ; 1 victoire ; 2 égalité
  var winners = [
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2],
      [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 1, 1, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 2, 0, 0, 0, 1, 1, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 2, 0, 0, 1, 1, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 0, 1, 1, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 2, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2]
  ];
  return winners;
}
function affichage_matrice(matrice){
    var affichage = "";
    matrice.forEach(function(line){
      line.forEach(function(element){
        //affichage += element;
        if(element == 0) affichage += "<img height='10' width='10' src='assets/false.png'/>";
        if(element == 1) affichage += "<img height='10' width='10' src='assets/true.jpg' />";
        if(element == 2) affichage += "<img height='10' width='10' src='assets/same.gif' />";

      });
      affichage += "<br/>";
    });
    document.getElementById("matrice").innerHTML = affichage;
}
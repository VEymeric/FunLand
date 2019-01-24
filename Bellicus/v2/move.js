var gameStatut = 1;

$(document).on('click', '.p1', function () {
  if(gameStatut == 1){
    if ($(".current")[0]){ // Si on est en sélection
      //if swapContent(this, $(".current")[0])
      var temp = this.innerHTML;
      this.innerHTML = $(".current")[0].innerHTML;
      $(".current")[0].innerHTML = temp;
      $('.current').removeClass('current');

    }else{ // Sinon on se met en mode sélection
      $(this).addClass('current');
      //colorer les cases selon content of this
    }
  }
});

$(document).on('click', '.element', function () {
  if(gameStatut == 2){ // si c'est mon tour
    if ($(".current")[0]){ // Si on est en sélection
      $(this).addClass('current');
      color_deplacement($(this)[0].textContent, $(this)[0].id);
    }else{ // Sinon on se met en mode sélection
      $(this).addClass('current');
      color_deplacement($(this)[0].textContent, $(this)[0].id, this);
      //colorer les cases selon content of this
    }
  }
});

function color_deplacement(element, id, truc){
  id = id.substr(6);
  var myid = ("button"+(parseInt(id)+6));
  $("button"+parseInt(id)+6).addClass('move');
  $(document.getElementById(myid)).addClass('move');
  console.log(document.getElementById(myid));

}

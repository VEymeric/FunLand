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

  $("p").click(function send(board){
  console.log("okkk");
  $.ajax({
    url: "post_form.php",
    method: 'POST',
    data: {key: table.innerHTML}
  }).done(function (html) {
    console.log(html);
    if (html == "oui") {
      $("#meteo").innerHTML = "truc";
    }else {
      $("#meteo").html("truc");
    }
  });
});

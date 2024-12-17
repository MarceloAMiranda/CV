$(function() {
  $(".navbar-nav li a, .navbar-brand").click(function(event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  var $more = "<br> Fui escoteiro no 2ºGrupo da Ajuda, gosto de estar na natureza. <br>"; 
  $more += "Gosto de pescar. <br>";
  $more += "Faço alguns pequenos arranjos de bricolage. <br>";
  $more += "Trabalhei com 'robots' de cozinha. <br>";
  $more += "Fiz montagens de natal como pequenas ilhas, e iluminação de centro comercial, ou pistas de gelo real. <br>";
  $more += "Fiz montagens de eventos na parte de iluminação e som. <br>";

  var button = $("#more");

  button.on("click", function() {
    var newEl = $("#about-me-text").append($more);
    newEl.hide().fadeIn(600);

    button.remove();
  });

  function increaseLikes() {
    var strLikes = $("#likes").text();
    var numLikes = Number(strLikes) + 1;
    $("#likes").text(numLikes);
  }

  $("#likesButton").on("click", function() {
    increaseLikes();
  });
});
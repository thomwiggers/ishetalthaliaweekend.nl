function telaf() {
  var doeltijd = new Date(2014,4,23,15); // y/m-1/d
  var nu = new Date();
  var diff = doeltijd.getTime()/1000 - nu.getTime()/1000;
  
  var dagen = Math.floor(diff/(60*60*24));
  var tijdmod = diff % (60*60*24);
  var uur = ('0'+Math.floor(tijdmod / (60*60))).slice(-2);
  tijdmod = tijdmod % (60*60);
  var minuten = ('0'+Math.floor(tijdmod / 60)).slice(-2);
  var seconden = ('0' + Math.floor(tijdmod % 60)).slice(-2);

  $("#dagen").html(dagen);
  $("#uur").html(uur);
  $("#minuten").html(minuten);
  $("#seconden").html(seconden);

  if(dagen < 0 && dagen > -5) { 
    $(".lead").html("<span class=\"text-success\">JA!</span>");
    $("#countdown").toggle();
    return;
  } 

  setTimeout(telaf, 1000);
}

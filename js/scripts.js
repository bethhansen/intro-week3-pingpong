$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
var pingPong = function(number) {
  if (number % 15 === 0)  {
     return true;
   } else {
     return false;
   }
};

    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $(".result").text(number);

    $("#result").show();
});
});

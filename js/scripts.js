// business logic
var pingPong = function(number) {
  if ((number / 15 === 0) && (number / 5 !== 0) || (number / 3 === 0)) {
     return true;
   } else {
     return false;
   }
 };


// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $(".result").text(number);

    $(".userReturn").show();
  });
});

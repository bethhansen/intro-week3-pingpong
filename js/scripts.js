
var pingPong = function(number) {
  var result = [];
  for (var i = 1; i<= number; i ++) {
  if (i % 15 === 0) {
    result.push("Ping-Pong");
  } else if (i % 5 === 0) {
    result.push("Pong");
  } else if (i % 3 === 0) {
    result.push("Ping");
    } else {
    result.push(i);
    }
  }
    return result;
  };
  $(document).ready(function() {
    $("form#pingPong").submit(function(event) {
   var number = parseInt($("input#number").val());
   if (isNaN(number)) {
     alert("Please enter a number!");
   } else {
     var result = pingPong(number);
     result.forEach(function(entry){
       $("#here").append("<li>" + entry + "</li>")
     });
}
event.preventDefault();
});
});

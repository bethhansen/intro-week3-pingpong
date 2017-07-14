$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

var pingPong = function(number) {
  var result = [];
  for (var i = 1; i<= number; i ++)
  if (number % 15 === 0) {
    result.push("Ping-Pong");
    } else if (number % 5 === 0) {
    result.push("Pong");
    } else if (number % 3 === 0) {
    result.push("Ping");
    } else
    result.push(i);
    }
    return result;
  };
   var number = parseInt($("input#number").val());
   if (isNaN(number)) {
     alert("Please enter a number!")
   } else {
     var result = pingPong(number);
     result.forEach(function(entry){
       $("#result").append("<li>" + "</li>")
     }
   }
  });
//
//   $("#result").show();
// });

alert("hi");

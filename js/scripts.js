// user interface logic
$(document).ready(function() {
    $("form#formNum").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("input#inputNum").val());
        var result = formNum(number);
        $("result").text(result);
    });
});

// Business logic
var formNum = function(pingpong) {
    if (inputNum%15 === 0) {
        return pingpong;
    } else if (inputNum%6 === 0) {
        return pong;
    } else if (inputNum%3 === 0) {
        return ping;
    } else { 
        return false;
    }
};
// user interface logic
// $(document).ready(function() {
//     $("form#formNum").submit(function(event) {
//         event.preventDefault();
//         var number = parseInt($("input#inputNum").val());
   
//         $("#result").append($('<li>').html(number));
// });

// Business logic
var formNum = [];
function pingpong(num) {
    for (var y = 1; y <= num; y++) {
        if (y%15 === 0) {
            formNum.push('pingpong');
        } else if (y%5 === 0) {
            formNum.push('pong') ;
        } else if (y%3 === 0) {
            formNum.push('ping');
        } else { 
            formNum.push(y);
        }
        
    };
   
};

$(function(){
   $('form').submit(function(event){
       event.preventDefault();
       var number = parseInt($('input').val());
       pingpong(number);
       console.log(formNum);
       formNum.forEach(function(e) {
       $("#result").append($('<li>').html(e));

   })
});
});

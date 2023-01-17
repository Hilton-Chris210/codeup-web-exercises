"use strict";
$(document).ready(function (){
// $(function() {
//     alert( 'The DOM has finished loading!' );
// });
// $('li').css("font-size", '20px')
// $('h1, p, li').css("background-color", 'yellow')
// $('h1').click(function() {
//     let h1Contents = $('h1').html();
//     alert(h1Contents);
// });


$("h1").click(function() {
    $(this).toggleClass("yellow");
});


$('p').click(function() {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', '#ff0000');
    },
    function() {
        $(this).css('color', '#000000');
    }
);

});
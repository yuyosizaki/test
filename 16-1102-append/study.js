/*js file*/
$(function(){

    $("body").append("<button class='increment'>increment</button>");
    $("body").append("<button class='decrement'>decrement</button>");

    var $increment = $(".increment");
    var $decrement = $(".decrement");

    $increment.click(function(){
        $("body").append("<p>test</p>");
    });

    $decrement.click(function(){
        // var index = $("p").index(this);
        // $("p").before("<style =>");
    });

})//end function

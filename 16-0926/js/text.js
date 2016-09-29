$(function(){
    var count       = 0;
    var maxcount    = 10;

    function countup(){
        if(count < 10){
            count = count+1;
            $(".number").text(count);
        }
    }

    $(".increment").click(function(){
        countup();
        if(count === maxcount){
            $(".alert").text("これ以上増えません");
        }
    })

    function countdown(){
        if(count > 0){
            count = count-1;
            $(".number").text(count);
        }
    }

    $(".decrement").click(function(){
        countdown();
        if(count === 0){
            $(".alert").text("これ以上減りません");
        }
    })

})// endfunction

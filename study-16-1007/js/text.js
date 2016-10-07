$(function(){
     // .incrementと.decrementを取得し、マウスオーバーした際にfadeoutする。
     $(".increment,.decrement").mouseover(function(){
        $(this).css("opacity","0.5");
     })

     $(".increment,.decrement").mouseout(function(){
         $(this).css("opacity","1");
     })

    //  .incrementがクリックされた時、.numberの数を10まで１ずつ増やす。
    var count    = 0;
    var maxcount = 10;
    function countUp(){
        if(count < 10){
            count = count+1;
            $(".number").text(count);
        }
    }

    $(".increment").click(function(){
        countUp();
    })

    //  .decrementがクリックされた時、.numberの数を10まで１ずつ減らす。
    function countDown(){
        if(count > 0){
            count = count-1;
            $(".number").text(count);
        }
    }

    $(".decrement").click(function(){
        countDown();
    })

    // 10と0までクリックされた時、.alertに注意を出力する。

})// endfunction

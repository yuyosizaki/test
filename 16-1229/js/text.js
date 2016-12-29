$(function(){

    // タイマー処理
    var count = 0;
    var countUp = function(){
        $(".count").text(count++);
    }
    $(".count").css("font-size","30px");

    // タイマー実行
    var id = setInterval(function(){
        countUp();
        if(count > 60){
            clearInterval(id);
        }
    },1000);

    // ハンバーガーメニューのアニメーション
    var $btn = $(".btn");

    $btn.click(function(){
        $(this).toggleClass("close");
    });

})

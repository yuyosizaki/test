$(function(){

    var $box = $(".box");
    $box.css("cursor","pointer");

    // .boxのindex番号を取得
    $box.click(function(){
        var index = $box.index(this);
        console.log(index);
    })

    // hoverイベント
    var $list = $(".list");

    $box.hover(function(){
        $(this).stop().addClass().fadeIn();
    },function(){
        $(".list").stop().fadeOut();
    })

    // clickイベント
    $box.click(function(){
        $(this).append("<div class='increment'></div>");
        $(".increment").css({
            "width": "30%",
            "height": "100px",
            "background": "#000",
        })
    })
})

$(function(){
    $nav = $(".nav");

    $nav.click(function(){
        index = $("ul > li").index(this);
        console.log(index);
    })

    // .closeをremoveし.openをaddする。
    $(".list").click(function(){
        if($nav.hasClass("close")===true){
            $nav.addClass("open");
            $nav.removeClass("close");
        } else {
            $nav.addClass("close");
            $nav.removeClass("open");
        }
    })

    $(".list").css("cursor","pointer");

    // .box1をブラウザの横幅-widthで止める。
    // ブラウザの横幅を取得する。
    // 取得した数値から、.box1の横幅を引く。

    $width = $(window).width();

    $box1 = $(".box1").animate({
        marginLeft: $width - 50
    },2000)
})// endfunction

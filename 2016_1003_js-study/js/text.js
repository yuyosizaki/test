$(function(){

    $menu  = $(".menu");

    /* if文でクラスを切り替える開閉メニュー。
    $(".click").click(function(){
        if($menu.hasClass("close") == true){
            $menu.addClass("open");
            $menu.removeClass("close");
        } else {
            $menu.addClass("close")
            $menu.removeClass("open")
        }
    })
    */

    // Slidetoggleを使った開閉メニュー
    $("ul").hide();
    $(".click").click(function(){
        $("ul").stop().slideToggle(1000);
    })
})// endfunction

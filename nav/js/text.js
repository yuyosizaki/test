$(function(){
    var $menu_title = $(".menu_title");
    var $menu       = $(".menu");
    var $close      =   "navi--close";
    var $open       =   "navi--open";

    $menu_title.hover(function(){
        if( $menu.hasClass($close) == true){
            $menu.addClass($open);
            $menu.removeClass($close);
        }else{
            $menu.addClass($close);
            $menu.removeClass($open);
        }
    })
})// endfunction

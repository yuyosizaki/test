$(function(){
    var $menu_title = $(".menu_title");
    var $menu       = $(".menu");
    var $close      =   "navi--close";
    var $open       =   "navi--open";
    var $list       = $(".menu li");
    var $box        = $(".box");

    $menu_title.click(function(){
        if( $menu.hasClass($close) == true){
            $menu.addClass($open);
            $menu.removeClass($close);
        }else{
            $menu.addClass($close);
            $menu.removeClass($open);
        }
    })

    $box.hide();

    // $listのインデックス番号を参照し、.boxのインデックス番号を取得。
    $list.click(function(){
        var index = $list.index($(this));
        $box.eq(index).slideToggle();
    })

    // .boxのインデックス番号をクリックでアラート表示。
    $box.click(function(){
        var boxindex = $box.index($(this));
        window.alert(boxindex);
    })

})// endfunction

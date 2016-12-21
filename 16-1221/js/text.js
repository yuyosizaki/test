$(function(){

    // .container__boxの縦横比を正方形に固定。

    var $box = $(".container__box");

    function resize_square(){
        var width = $box.css("width");
        $box.css("height",width);
    };
    //
    $(window).resize(function(){
        resize_square();
    });

    resize_square();

    // 参考サイト　http://spot-web.jp/blog/1685/

    

})

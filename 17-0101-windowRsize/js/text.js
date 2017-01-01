$(function(){

    // 読み込みと同時にブラウザ幅を取得。
    $(window).on("load resize",function(){
        var $width = $(window).width();
        $(".size").text($width);
    })

})

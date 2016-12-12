$(function(){
    // 配列から要素を全て出力。
    var tmge = ["chiba","ueno","abe","kuhara"];
    for(var i=0; i<tmge.length; i++){
        console.log(tmge[i]);
    }

    // hover練習
    var $list = $(".navi-list");
    $list.css("cursor","pointer");

    $list.hover(function(){
        $(this).css("color","blue")
    },function(){
        $(this).fadeOut(1000);
    })
})

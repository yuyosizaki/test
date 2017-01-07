$(function(){

    // 参考サイト　https://app.codegrid.net/entry/practical-jquer　y-1

    /* array配列から要素を全て取り出す。
    var array = ["a","b","c","d","e",];
    for(n=0; n<array.length; n++){
        console.log(array[n]);
    }
    */

    var $box = $(".box");

    $box.on("click",function(){
        $("li").append('<p>クリックされました</p>');
    });

})

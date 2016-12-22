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

    // 配列復習
    var array =["sato","suzuki","itoh","yoshida"];
    // console.log(array.length);
    // array.push("tanaka");  要素の追加
    // array.splice(2,1); 配列の削除
    // console.log(array);

    // 配列の出力
    for(var n=0; n<array.length; n++){
        console.log(array[n]);
    }

    // ランダム変数
    var random = Math.floor(Math.random()*100);
    console.log(random);
})

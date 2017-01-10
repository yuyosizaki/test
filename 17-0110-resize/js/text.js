$(function(){

    // 配列からランダムに参照。

    var ramdom = ["a","b","c","d","e","f","g"];
    var array = ramdom[Math.floor(Math.random() * ramdom.length)];
    var $text = $(".text");

    console.log(array);


    // 5秒後にdivを出力。

    function box(){
        $text.append("<div class='box'></div>");
    }

    setTimeout(box,5000);

    // リサイズの復習。

    var $width = $(".width");

    $(window).resize(function(){
        var width = $(window).width();
        $width.text("ブラウザの横幅は"+width+"pxです。");
    })


})// endfunction

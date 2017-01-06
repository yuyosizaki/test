$(function(){

    // 参考サイト　https://app.codegrid.net/entry/practical-jquer　y-1

    /* array配列から要素を全て取り出す。
    var array = ["a","b","c","d","e",];
    for(n=0; n<array.length; n++){
        console.log(array[n]);
    }
    */

    // 祖先要素をイベントハンドラとしたイベント

    // 増えるイベント
    var $increment = $(".increment");

    $increment.on("click",function(){
        $("ul").append($('<li>あとから追加されました。</li>'));
    })

    /* 赤くなるイベント

    $("ul").on("click","li",function(){
        $(this).css({
            "cursor": "pointer",
            "color": "#990",
        });
    });*/

    // hoverイベント

    $("ul").on({
        "mouseenter": function(){
            $(this).css("color","#b00");
        },
        "mouseleave": function(){
            $(this).css("color","#000");
        }
    },"li");

    // ボタンイベント

    var $click = $(".click");
    $click.on('click',function(){
        window.alert("クリックされました。");
    })

})

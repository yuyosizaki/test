$(function(){

    // 参考サイト　https://app.codegrid.net/entry/practical-jquer　y-1

    var i;
    var $button = $("button");

    for(i=0; i<3; i++){
        $button.eq(i).on('click', {value: i+1},onClick);
    }

    function onClick(e){
        alert(e.data.value);
    }

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
        $("ul").append($('<li>あとから追加した</li>'));
    })

    // 赤くなるイベント

    $("ul").on("click","li",function(){
        $(this).css({
            "cursor": "pointer",
            "color": "#990",
        });
    });

})

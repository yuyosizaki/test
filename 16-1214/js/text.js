$(function(){

    //連想配列から各要素全て出力。
    var arra = {"name":"taro","age":14,"weight":"10kg","adress":"Yokohama"};
    for(var key in arra){
        console.log(key+"="+arra[key]);
    }

    // return,関数練習
    function test(){
        return 39874*7362;
    }
    console.log(test());

    // 三角形の面積を求める。
    function triangle(width,height){
        var answer = (width * height)/2;
        return answer;
    }

    console.log(triangle(15,2));

    // マウスをホバーした時、navi-listのインデックス番号を取得する。
    var $NaviList = $(".navi-list");

    $NaviList.hover(function(){
        var index = $NaviList.index(this);
        console.log(index);
        $(this).css({
            "cursor": "pointer"
        })
    },function(){
        $(this).css({
            // "color":"#888",
        })
    })
})

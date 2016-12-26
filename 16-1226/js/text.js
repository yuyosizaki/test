$(function(){

    var num = 30;

    /* if文確認
    if(num >= 30){
        console.log('true');
    } else {
        console.log('false');
    }
    */

    /* 論理演算子:否定
    if(!(num >= 10 && num >= 40)){
        console.log('false');
    } else {
        console.log('null');
    }
    */

    // 引数・返り値　台数の面積を出力

    function　trapezoid(base,Uperbase,height){
        return (base+Uperbase)*height/2;
    }
    console.log(trapezoid(30,10,5));

    // cssメソッド

    var $trapezoid = $(".trapezoid");

    $trapezoid.css({
        "cursor": "pointer",
    })
    
})

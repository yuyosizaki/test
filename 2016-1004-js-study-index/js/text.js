$(function(){

    //　リストのインデックス番号を取得し、.boxのインデックス番号を取得。
    //  取得したboxをjQueryからcssで赤くする。
    $(".list").click(function(){
        var index = $(".list").index(this);
        $(".box").eq(index).css("background","#933");
    })

})// endfunction

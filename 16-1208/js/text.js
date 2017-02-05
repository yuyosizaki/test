$(function(){
    // 2重連想配列
    var tmge = {
                "チバ": {weight: 58, height: 175},
                "アベ": {weight: 55, height: 186},
                "ウエノ": {weight: 58, height: 184},
                "クハラ": {weight: 59, height: 165},
            };

    // 配列から出力
    for(key in tmge){
        // console.log(tmge[key]);
        console.log(key+"身長"+tmge[key].height+"cm,体重"+tmge[key].weight+"kg");
    }

    // モーダル
    var $modal = $(".modal");
    var $modalclose = $(".modalclose");
    var $modalstart = $(".modalstart");

    $modal.hide();
    // モーダルスタートイベント
    $modalstart.click(function(){
        $modal.fadeIn();
    })
    // モーダル閉じるイベント
    $modalclose.click(function(){
        $modal.fadeOut();
    })
    
})

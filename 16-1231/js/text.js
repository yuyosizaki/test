$(function(){
    // ランダムカウント
    // random = Math.floor(Math.random()*(11-5)+5);
    function count(){
        random = Math.floor(Math.random()*(11-5)+5);
        $(".count").text(random);
    }

    var ID = setInterval(count,1000);

    $(".stop").click(function(){
        clearInterval(ID);
    })
})// endfunction

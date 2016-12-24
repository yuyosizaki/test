$(function(){

    //  タイマー処理・復習

    var count = 0;
        var countUp = function(){
            console.log(count++);
            var id = setTimeout(countUp,1000);
            if(count>10){
                clearTimeout(id);
            }
        }
        countUp();

})

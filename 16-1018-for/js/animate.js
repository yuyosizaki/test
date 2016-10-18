$(function(){
    /* jsからcssを書く。
    $("body").append("<div class='container'></div>");
    var $container = $(".container");
    $container.css({
        "width"  : "50px",
        "height" : "50px",
        "background" : "#666"
    })*/


    for(i=0; i<10; i++){
        alert(i+"の段");
        for(n=1; n<10; n++){
            alert(i+"x" +n+ "=" +i*n);
        }
    }
}) // endfunction

$(function(){
    $(".wrapper--hover").hide();
    $(".wrapper>li:first-of-type").hover(function(){
        $(".wrapper--hover").show();
    }, function(){
        $(".wrapper--hover").hide();
    });
});

// 明日は.wrapper--hoverの高さを指定し、floatを解除してみること。

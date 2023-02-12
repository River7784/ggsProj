$(function(){
    //bgimg 하이라이트 기능
    let highlight;
    $(".bg_div").hover(function(index){
        highlight=$(this).index();
        $(".img"+(highlight+1)).css({
            filter : "brightness(90%)",
        })
    },function(){
        highlight=$(this).index();
        $(".img"+(highlight+1)).css({
            filter : "brightness(60%)"
        })
    })
    $(".location_menu>li").hover(function(){
        highlight=$(this).index();
        $(".location_menu .goimg"+(highlight+1)).css({
            scale : '1.1',
        })
    },function(){
        highlight=$(this).index();
        $(".location_menu .goimg"+(highlight+1)).css({
            scale : '1.0',
            borderRadius:"40"
        })
    })
});
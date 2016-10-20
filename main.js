window.onscroll = function(){
    $(".moss").css("opacity", .7 - $(window).scrollTop() / 3000);
};
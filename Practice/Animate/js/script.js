$(document).ready(function() {
    $("#animate-btn").click(function(){
        $(".div1").animate({left:'200px'});
    });
    $('#animate-big-btn').click(function() {
        $('.div1').animate({
            left:'100px',
            height:'200px',
            width:'200px',
            opacity: '0.5'
        })
    });
    $('#multiple-animate').click(function() {
        var div = $('.div1');

        div.animate({height:'300px',opacity:'0.4'},"slow");
        div.animate({width:'300px',opacity:'0.4'},"fast");
        div.animate({height:'100px',opacity:'0.4'},"slow");
        div.animate({width:'100px',opacity:'0.4'},"fast");

    });
});
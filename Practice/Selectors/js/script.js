$(document).ready(function() {
    $(".hide_all").click(function(){
        $("p").hide();
    });
    $(".hide_by_id").click(function(){
        $("#test").hide();
    });
    $("p").click(function(){
        $(this).hide();
    });
    $("#p1").mouseenter(function(){
        $(this).hide();
    });
    $("#p2").click(function() {
        $(this).css("background-color","yellow");
    });
    $(".toggle").click(function() {
        $("#p3").toggle()
    });
    $("#fade").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(5000);
      });
});


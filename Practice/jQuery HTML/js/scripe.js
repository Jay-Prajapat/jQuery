$(document).ready(function() {
    $('#test').click(function() 
    {
        alert("Value: " + $("#input-text").val());
    });
    $("#btn1").click(function() {
        alert("Value: " + $("p").text());
    });
    $('#btn2').click(function() {
        alert($('#w3s').attr("href"));
    });
    $("#btn3").click(function() {
        $('#test1').text("hello world");
    });
    $("#btn4").click(function() {
        $("#test2").html("<h1>Hello World</h1>");
    });
    $("#btn5").click(function() {
        $("#test3").val("Jay Prajapati");
    });
    $("#btn6").click(function() {
        $('#test1').append("<b>Appended Text</b>");
    });
    $("#btn7").click(function() {
        $("#test2").prepend("<b>Prepended Text</b>");
    });
    $("#btn8").click(function() {
        $("#test1").after("<b>Text added after</b>");
    });
    $("#btn9").click(function() {
        $("p").addClass("blue");
    });
});  
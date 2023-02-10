$(document).ready(function() {
    $("#btn1").click(function() {
        $("#div1").load("demo.txt");
    });
    $("#btn2").click(function() {
        $("#div1").load("demo.txt #p1");
    });
    $("#btn3").click(function() {
        $("#div2").load("demo.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success"){
                alert("External content loaded successfully!");
            }
            if(statusTxt == "error"){
                alert("Error " + xhr.status +  ": " + xhr.statusTxt);
            }
        });
    });
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
}); 

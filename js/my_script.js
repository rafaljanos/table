$(document).ready(function() {
    $("table th").click(function(){
        $("tr").children().removeClass("selection")
        $(this).siblings().addClass("selection");
    });
});
$("button").on("click", function () {
    $("button").addClass("pressed");
    setTimeout(function (){ $("button").removeClass("pressed")}, 200);
});
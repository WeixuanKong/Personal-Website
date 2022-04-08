$(document).ready(function() {
    setInterval(clock, 1000);
});

function clock() {
    $("#time").load("./php/getCurrTime.php");
}
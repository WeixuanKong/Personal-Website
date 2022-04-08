$(document).ready(function() {
    setInterval(clock, 100);
    setInterval(animate, 1);
});

function clock() {
    $("#time").load("./php/clock.php");
}

function animate(){
    const cursor = document.querySelector(".cursor");
    let timeout;

//follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;

        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block";

        //cursor effects when mouse stopped
        function mouseStopped(){
            cursor.style.display = "none";
        }
        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 1000);
    });

//cursor effects when mouseout
    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });
}

let soundEffect = new Audio("./assets/click.wav");

document.onclick = function() {
    soundEffect.play().then(r => {});
}
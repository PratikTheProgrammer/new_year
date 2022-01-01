
function newFunction(d) {
    let usr = prompt("What is Your Name?");
    var h = document.querySelector("#h2");
    h.insertAdjacentText("beforeend", usr);
    let audio = new Audio('music.mp3');
    audio.play();
}

newFunction();
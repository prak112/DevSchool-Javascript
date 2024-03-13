// define closure function
function changeColor(color){
    return function() {
        document.body.style.backgroundColor = color;
    };
}

// closure function instances
const red = changeColor("red");
const blue = changeColor("blue");
const green = changeColor("green");

// assign instances through event handling
document.getElementById("red").onclick = red;
document.getElementById("blue").onclick = blue;
document.getElementById("green").onclick = green;
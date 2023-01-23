const div = document.createElement("div");
div.id = "container";
document.body.appendChild(div);

const display = document.createElement("div");
display.id = "display";
div.appendChild(display);

const buttonContainer = document.createElement("div");
buttonContainer.id = "decrement_increment_container";
div.appendChild(buttonContainer);

const decrement = document.createElement("button");
decrement.id = "decrement";
buttonContainer.appendChild(decrement);

const increment = document.createElement("button");
increment.id = "increment";
buttonContainer.appendChild(increment);

const reset = document.createElement("button");
reset.id = "reset";
div.appendChild(reset);

let displayState = 0;

display.innerHTML = 0;
decrement.innerHTML = "-";
increment.innerHTML = "+";
reset.innerHTML = "reset";

decrement.onclick =  function () {
    displayState -= 1;
    display.innerHTML = displayState;
}

increment.onclick = function () {
    displayState += 1;
    display.innerHTML = displayState;
}

reset.onclick = function () {
    displayState = 0;
    display.innerHTML = displayState;
}

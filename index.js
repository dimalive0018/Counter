let display = document.getElementById("display");
let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");
let reset = document.getElementById("reset");
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
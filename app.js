"use strict";

let screen = document.getElementById("screen-resultado");

function getData(ref) {
    let value = ref.value;
    screen.value += value; // concateno y muestro en el display
}

function clean() {
    screen.value = "";
}

function calcular() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
        setTimeout(() => {
            clean();
        }, 1000);
    }
}
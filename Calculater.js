const display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function equal() {
  try {
    if (display.value === "") return;

    display.value = Function(`"use strict"; return (${display.value})`)();
  } catch {
    display.value = "ERROR";
  }
}

function resetDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}
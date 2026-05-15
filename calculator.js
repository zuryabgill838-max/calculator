
  let display = document.getElementById("display");  // input field reference

  function appendValue(value) {
    display.value += value;
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }

  function clearDisplay() {
    display.value = "";
  }
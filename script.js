function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    if (!isNaN(fahrenheit)) {
      fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
      fahrenheitInput.value = "";
    }
  }
  
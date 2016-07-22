//Equations for converting to F° from C°, and to C° from F°

// C = (F - 32) .5556
// or
// F = C (1.8 + 32)

var button = document.getElementById("converter");
button.addEventListener("click", determineConverter);
var fahrenheit = document.getElementById("fahrenheit");
var celsius = document.getElementById("celsius");



function toCelsius (degree) {
  var degree = document.getElementById("temperature").value;
  var conversion = (.5556) * (degree - 32);
  console.log(conversion);
  document.getElementById("putTextHere").innerHTML = `<h1>${conversion.toString()}</h1>`;
  return conversion

}

function toFahrenheit (degree) {
  var degree = document.getElementById("temperature").value;
  var conversion =  (degree * 1.8) + 32;
  console.log(conversion);
  document.getElementById("putTextHere").innerHTML = `<h1>${conversion.toString()}</h1>`;
  return conversion
}

function determineConverter (clickEvent) {
  if (fahrenheit.checked) {
    toFahrenheit();
  } else if (celsius.checked) {
    toCelsius();
  }
}

// Get a reference to the button element in the DOM


// This function should determine which conversion should
// happen based on which radio button is selected.


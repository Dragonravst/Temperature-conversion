const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
    if (celsius.value === "") {
        fahrenheit.value = "";
        kelvin.value = "";
    } else {
        fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
        kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2);
    }
});

fahrenheit.addEventListener("input", () => {
    if (fahrenheit.value === "") {
        celsius.value = "";
        kelvin.value = "";
    } else {
        celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
        kelvin.value = (((fahrenheit.value - 32) * 5) / 9 + 273.15).toFixed(2);
    }
});

kelvin.addEventListener("input", () => {
    if (kelvin.value === "") {
        celsius.value = "";
        fahrenheit.value = "";
    } else {
        celsius.value = (kelvin.value - 273.15).toFixed(2);
        fahrenheit.value = ((kelvin.value - 273.15) * 9 / 5 + 32).toFixed(2);
    }
});

function validInput(input, unit) {
    if (isNaN(input.value)) {
        input.classList.add("error");
        alert(`Please enter a valid number for ${unit}`);
        input.value = "";
        input.classList.remove("error");
    }
}

document.querySelector("#clearBtn").addEventListener("click", () => {
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
    celsius.focus();
});

celsius.addEventListener("blur", () => validInput(celsius, "Celsius"));
fahrenheit.addEventListener("blur", () => validInput(fahrenheit, "Fahrenheit"));
kelvin.addEventListener("blur", () => validInput(kelvin, "Kelvin"));

const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i=0; i< inputs.length ; i++) {
    let input = inputs[i];

    input.addEventListener("input", (e) =>{
        let value = parseFloat(e.target.value);
        //console.log(e.target.name + ":" + value)

        switch (e.target.name) {
            case "celsius": 
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit": 
                celsiusInput.value = (value -32) / 1.8;
                kelvinInput.value = (value -32) / 1.8 + 273.15;
                break;
            case "kelvin": 
                fahrenheitInput.value = value - 273.15;
                celsiusInput.value = ((value - 273.15) * 1.8) + 32;
                break;
            
        }

    })
}
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid Height.`;
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid Weight.`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            result.innerHTML = `You are under weight.<br>Your BMI = ${bmi}`;
        } else if (bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `You are normal weight.<br>Your BMI = ${bmi}`;
        } else if (bmi > 24.9){
            result.innerHTML = `You are over weight.<br>Your BMI = ${bmi}`;
        }
    }
})
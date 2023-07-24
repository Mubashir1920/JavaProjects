const height = document.getElementById("height");
const weight = document.getElementById("weight");
const bmi = document.getElementById("bmi");
const form = document.getElementById("content");

form.addEventListener("submit", calculateBMI);

function calculateBMI(e) {
    const weightValue = weight.value;
    const heightValue = height.value / 100;
    const bmiValue = parseInt(weightValue / (heightValue * heightValue));
    
    bmi.textContent = `Your BMI is ${bmiValue}. `;

    if(bmiValue>=25)
    {
        bmi.innerHTML+=`Over-Weight`
    }
    else if(bmiValue<25 && bmiValue>=18)
    {
        bmi.innerHTML+=`Normal`
    }
    else{
        bmi.innerHTML+=`Under-Weight`
    }

    weight.value = "";
    height.value = "";
    e.preventDefault();
}


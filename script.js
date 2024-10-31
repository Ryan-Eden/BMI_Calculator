const bmiForm = document.querySelector(".bmi-form");
const radioInputs = document.querySelector(".radio-inputs");

const metricInputs = document.querySelector(".metric-inputs");
const metricHeightEl = document.querySelector("#metric-height");
const metricWeightEl = document.querySelector("#metric-weight");

const imperialInputs = document.querySelector(".imperial-inputs");
const imperialHeightFeetEl = document.querySelector("#imperial-height-ft");
const imperialHeightInchesEl = document.querySelector("#imperial-height-ft");
const imperialWeightStoneEl = document.querySelector("#imperial-weight-st");
const imperialWeightPoundsEl = document.querySelector("#imperial-weight-lbs");


const bmiValue = document.querySelector("#bmi-value");

function hideMetricInputs() {
    imperialInputs.classList.remove("hidden");
    metricInputs.classList.add("hidden");
}

function hideImperialInputs() {
    metricInputs.classList.remove("hidden");
    imperialInputs.classList.add("hidden");
}

function selectMeasurement(event) {
    const measurementType = event.target.value;
    measurementType === "metric" ? hideImperialInputs() : hideMetricInputs();
    return measurementType;
}

function calculateBMIMetric() {
    const height = parseInt(metricHeightEl.value) / 100;
    const weight = parseInt(metricWeightEl.value);

    const bmi = weight / (height * height);
    const roundedBMI = Math.round(bmi * 10) / 10;

    if (metricHeightEl.value && metricWeightEl.value) {
        bmiValue.textContent = roundedBMI;
    }

}

function calculateBMIImperial() {

    const heightFeet = parseInt(imperialHeightFeetEl.value);
    const heightInches = parseInt(imperialHeightInchesEl.value);
    const height = heightFeet * 12 + (heightInches + heightInches); // Inches

    const weightStone = parseInt(imperialWeightStoneEl.value);
    const weightPounds = parseInt(imperialWeightPoundsEl.value);
    const weight = weightStone * 14 + (weightPounds + weightPounds); // Pounds

    if (isNaN(height) || isNaN(weight)) return;

    const result = weight / (height * height) * 703;
    const roundedBMI = Math.round(result * 10) / 10;
    bmiValue.textContent = roundedBMI;


}



//EVENT LISTENERS
radioInputs.addEventListener("click", selectMeasurement);

bmiForm.addEventListener("input", e => {


});


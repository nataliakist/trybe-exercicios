const readline = require('readline-sync');
const BMI_MAX_AND_MIN = require('./bmiMaxAndMin')

function bmiCalculator(weight, height) {
  const heightSquared = (height / 100) ** 2
  const result = weight / heightSquared;
  
  return result.toFixed(2);
};

function handleBMIResult(result) {
  const statuses = Object.keys(BMI_MAX_AND_MIN)
  const statusFind = statuses.find((currentStatus) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[currentStatus]
    if(result >= minBMI && result <= maxBMI) return currentStatus
  })
  return statusFind;
};

function main() {
  const weight = readline.questionFloat('What\’s your weight(in kg)? ');
  const height = readline.questionInt('What\’s your weight(in cm)? ')
  const result = bmiCalculator(weight, height)
  const statusResult = handleBMIResult(result)
  console.log(result);
  console.log(statusResult);
  }

main();


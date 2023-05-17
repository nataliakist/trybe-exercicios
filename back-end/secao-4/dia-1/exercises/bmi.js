function bmiCalculator(weight, height) {
  const result = weight/((height/100)^2);
  return result;
};

console.log(bmiCalculator(84, 168))


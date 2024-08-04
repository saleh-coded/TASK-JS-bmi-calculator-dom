function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  
  console.table({ age, weight, height, male, female});

  // You are going to write the code here before the curly braces 👇🏻    
  BMI = (weight/ ((height*0.01)**2));
  alert(BMI);

//   1. Using the result you calculated in Challenge 1 and check the BMI state
//   1. Below 18.5 Underweight
//   2. 18.5 – 24.9 Healthy Weight
//   3. 25.0 – 29.9 Overweight
//   4. 30.0 and Above Obesity
// 2. Show the BMI state in an alert

if (BMI>=30) {
  alert("Above Obesity");
} else if (BMI>=25 && BMI<=29.9) {
  alert("Overweight");
} else if (BMI>=18.5 && BMI<=24.9) {
  alert("Healthy Weight");
} else {
  alert("Underweight");
}

if (age>=65 && (BMI>=24 && BMI<=29)) {
  alert("Healthy");
} else if ((age>=55 && age<=64) && (BMI>=23 && BMI<=28) ) {
  alert("Healthy");
} else if ((age>=45 && age<=54) && (BMI>=22 && BMI<=27)) {
  alert("Healthy");
} else if ((age>=35 && age<=44) && (BMI>=21 && BMI<=26)) {
  alert("Healthy");
} else if ((age>=25 && age<=34) && (BMI>=20 && BMI<=25)) {
  alert("Healthy");
}  else if ((age>=19 && age<=24) && (BMI>=19 && BMI<=24)) {
    alert("Healthy");
} else {
  alert("Not Healthy");
}


}

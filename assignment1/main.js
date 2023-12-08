function print() {
  var input = prompt("enter the input");
  alert(`output : ${input}`);
}
function mod() {
  var number = prompt("enter the number");
  if (number % 3 == 0 && number % 4 == 0) {
    alert("yes");
  } else {
    alert("no");
  }
}
function max() {
  var num1 = prompt("enter first number"),
    num2 = prompt("enter second number");
  if (num1 > num2) {
    alert(`the max: ${num1}`);
  } else {
    alert(`the max: ${num2}`);
  }
}
function sign() {
  var number = prompt("enter the number");
  if (number >= 0) {
    alert(` ${number} is : positive`);
  } else {
    alert(` ${number} is :negative`);
  }
}
function maxAndMin() {
  var num1 = prompt("enter first number"),
    num2 = prompt("enter second number"),
    num3 = prompt("enter third number"),
    max = 0,
    min = 0;
  if (num1 > num2 && num1 > num3) {
    max = num1;
    if (num2 > num3) {
      min = num3;
    } else {
      min = num2;
    }
  } else if (num2 > num1 && num2 > num3) {
    max = num2;
    if (num1 > num3) {
      min = num3;
    } else {
      min = num1;
    }
  } else {
    max = num3;
    if (num2 > num1) {
      min = num1;
    } else {
      min = num2;
    }
  }
  alert(` the max: ${max} \n the min: ${min}`);
}
function evenAndOdd() {
  var number = prompt("enter the number");
  if (number % 2 == 0) {
    alert("the number is : even");
  } else {
    alert("the number is : odd");
  }
}
function vowelAndConsonant() {
  var char = prompt("enter the character");
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    alert("the character is: vowel");
  } else {
    alert("the character is: consonant");
  }
}
function counter() {
  var count = prompt("enter the number");
  for (var i = 0; i < count; i++) {
    console.log(i + 1);
  }
}
function multiplicationTable() {
  var count = prompt("enter the number");
  for (var i = 0; i < 12; i++) {
    console.log((i + 1) * count);
  }
}
function even() {
  var count = prompt("enter the number");
  for (var i = 0; i <= count; i += 2) {
    console.log(i);
  }
}
function power() {
  var number = prompt("enter the number"),
    power = prompt("enter the power");
  result = 1;
  for (var i = 1; i <= power; i++) {
    result = number * result;
  }
  alert(result);
}
function marks() {
  var markes = 0,
    sum = 0,
    avg = 0,
    Perc = 0;
  for (var i = 0; i < 5; i++) {
    sum += +prompt(` enter number ${i + 1}`);
  }
  avg = sum / 5;
  Perc = (avg * 100) / sum;
  alert(`Total marks:${sum} \n Average Marks:${avg} \n Percentage:${Perc}%`);
}
function dayes() {
  var month = prompt(" enter Month Number");
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    alert("Days in Month : 30 days");
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    alert("Days in MonthM : 31 days");
  } else if (month == 2) {
    alert("Days in Month : 28 days");
  }
}
function grad() {
  var Physics = prompt(" enter Physics grade"),
    Chemistry = prompt(" enter Chemistry grade"),
    Biology = prompt(" enter Biology grade"),
    Mathematics = prompt(" enter Mathematics grade"),
    Computer = prompt(" enter Computer grade");

  function getgrade(grad) {
    if (grad >= 90) return "Grad A";
    else if (grad >= 80) return "Grad B";
    else if (grad >= 70) return "Grad C";
    else if (grad >= 60) return "Grad D";
    else if (grad >= 40) return "Grad E";
    else return "Grad F";
  }
  alert(`Physics GPA :${getgrade(Physics)}\n
  Chemistry GPA :${getgrade(Chemistry)}\n
  Biology GPA :${getgrade(Biology)}\n
  Mathematics GPA :${getgrade(Mathematics)}\n
  Computer GPA :${getgrade(Computer)}\n`);
}
function dayesswitch() {
  var month = prompt(" enter Month Number");
  switch (month) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
      alert("Days in Month : 31 days");
      break;
    case "2":
      alert("Days in Month : 28 or 29 days");
      break;
    case "4":
    case "6":
    case "9":
    case "11":
      alert("Days in Month : 30 days");
      break;
  }
}
function vowelAndConsonantswitch() {
  var char = prompt("enter the character");
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      alert("the character is: vowel");
      break;
    default:
      alert("the character is: consonant");
      break;
  }
}
function maxswitch() {
  var num1 = prompt("enter first number"),
    num2 = prompt("enter second number");
  switch (true) {
    case num1 > num2:
      alert(`the max: ${num1}`);
      break;
    case num2 > num1:
      alert(`the max: ${num2}`);
      break;
  }
}
function evenAndOddswitch() {
  var number = prompt("enter the number");
  switch (true) {
    case number % 2 == 0:
      alert("the number is : even");
      break;
    case number % 2 != 0:
      alert("the number is : odd");
      break;
  }
}
function signswitch() {
  var number = prompt("enter the number");
  switch (true) {
    case number > 0:
      alert(` ${number} is : positive`);
      break;
    case number < 0:
      alert(` ${number} is : negative`);
      break;
    case number == 0:
      alert(` ${number} is : zero`);
      break;
  }
}
function calculatorswitch() {
  function calc() {
      var firstNumber = prompt("enter first number"),
    operation = prompt("enter  operation"),
    secondNumber = prompt("enter second number");
    switch (operation) {
      case "+":
        return ( +firstNumber + +secondNumber);
      case "*":
        return (firstNumber * secondNumber);
      case "-":
        return ( firstNumber - secondNumber);
      case "/":
        return ( firstNumber / secondNumber);
      case "%":
        return (firstNumber % secondNumber);
    }
  }
  alert(` the result is :${calc()}`);
}
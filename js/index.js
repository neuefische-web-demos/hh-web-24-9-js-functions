console.clear();

// Function declaration

/*

function printPersonalData() {
    const name = "Alex";
    const age = 24;
    console.log(name + " is " + age + " years old");
}

printPersonalData();

*/

// Function parameters

/* 

function printPersonalData(name, age) {
  console.log(name + " is " + age + " years old");
}

printPersonalData("Lars", 23);

printPersonalData("Jordan", 25);

*/

// Return statement

function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(3, 4);
console.log(result);

function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}

const isValid = checkInputLength("Hey");
console.log(isValid);

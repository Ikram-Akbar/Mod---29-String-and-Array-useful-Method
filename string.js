// String Comparison toLowerCase() and upperCase()

// First method
const userInput = "I have an Idea for our programming ";
console.log(userInput.toLocaleLowerCase());
// second method
const stringConverter = (string) => {
  return string.toLocaleLowerCase();
};

const newString = stringConverter("I LOVE MY COUNTRY ");
console.log(newString);
// this is shortest method by using arrow function
const strConverter = (str) => str.toLocaleLowerCase();
console.log(strConverter("THIS IS ANOTHER LINE "));

// 2. toUpperCase() method

// First method
const userInput1 = "I have an Idea for our programming ";
console.log(userInput1.toUpperCase());
// second method
const stringConverter1 = (string) => {
  return string.toUpperCase();
};
const newString1 = stringConverter1("i love my country ");
console.log(newString1);
// this is shortest method by using arrow function
const strConverter1 = (str) => str.toLocaleLowerCase();
console.log(strConverter1("this is another line for new programmer  "));

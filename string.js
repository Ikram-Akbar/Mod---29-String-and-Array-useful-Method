// String Comparison toLowerCase() and upperCase()

// First method 
const userInput = "I have an Idea for our programming ";
console.log(userInput.toLocaleLowerCase());
// second method 
const stringConverter = (string) => {
    return (string.toLocaleLowerCase())
};
// third method 
const newString = stringConverter("I LOVE MY COUNTRY ");
console.log(newString);
// this is shortest method by using arrow function 
const strConverter = str =>  (str.toLocaleLowerCase());
console.log(strConverter("THIS IS ANOTER LINE "));
// JavaScript String Functions
function title() {
    let title = "JavaScript String Functions:";
    console.log("-".repeat(title.length));
    console.log(title);
    console.log("-".repeat(title.length));
}
/* Exercise 1: 
Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.
Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix. */
let x = 123456789;
function reverseNumber(number) {
    let stringNumber = number + "";
    return stringNumber.split("").reverse().join("");
}
console.log("Excercise 1:", reverseNumber(x));

/* Exercise 2: 
Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string.
Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix. */
let name = "Sebastian";
function alphabeticalOrder(string) {
    return string.toLowerCase().split("").sort().join("");
}
console.log("Excercise 2:", alphabeticalOrder(name));

/* Exercise 3: 
Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".
Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix. */
let che = "sebastián che";
function firstLetterUppercase(string) {
    let stringUppercase = [];
    string.split(" ").forEach(element => {
        stringUppercase.push(element[0].toUpperCase() + element.slice(1))
    });
    return stringUppercase.join(" ");
}
console.log("Excercise 3:", firstLetterUppercase(che));
/* Exercise 4: 
Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".
Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix. */
let frase = "Web Development Tutorial";
function longestWord(string) {
    let longest = null;
    string.split(" ").forEach(element => {
        if(longest == null || element.length > longest.length) {
            longest = element;
        }
    });
    return longest;
}
console.log("Excercise 4:", longestWord(frase));


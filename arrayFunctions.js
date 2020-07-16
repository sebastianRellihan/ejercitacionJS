let title = "JavaScript Array Functions:";
console.log("-".repeat(title.length));
console.log(title);
console.log("-".repeat(title.length));

// Sorting an Array
/* Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.  Print the first element of the array in the console.  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop.
Save the file and reload the page. You should see the first element of the sorted array, the last element of the sorted array, and a list of all the elements in order in the array in the console.*/
let names = ["Lando", "Pao", "Nacho", "Brahim", "Tincho"].sort();
console.log("Exercise 1: first =>", names[0]);
console.log("Exercise 1: last =>", names[names.length-1]);
for (let i = 0; i < names.length; i++) {
    console.log("Exercise 1: ", names[i]);    
}
// Looping over an array
/* Exercise 2: Create an array with all the ages of the students in your class.  Iterate the array using a while loop, and then print every age in the console.  Add a conditional inside the while loop to only print even numbers.  Change the loop to use a "for" loop instead of a "while" loop.
Save your changes to your JavaScript file. Reload the HTML page in your browser. You should see every age printed, then only the even numbers printed.  If not, investigate and fix. */
let ages = [24, 28, 29, 27, 29];
let i = 0;
while (i<ages.length) {
    if (ages[i] % 2 == 0) {        
        console.log("Excercise 2:", ages[i]);
    }
    i++;
}
// Loop instead of while
for (let i = 0; i < ages.length; i++) {    
    if (ages[i] % 2 == 0) {        
        console.log("Excercise 2:", ages[i]);
    }
}

// Functions that use arrays 
let title2 = "Functions that use arrays :";
console.log("-".repeat(title2.length));
console.log(title2);
console.log("-".repeat(title2.length));

/* For the following exercises, you cannot sort your array. Be sure your solution works for any array that it is passed!
Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the lowest number in the array printed in the console.  If not, investigate and fix. */
function lowestNumber(array) {
    let lowest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i]<lowest) {
            lowest = array[i];
        }
    }
    console.log("Excercise 3:", lowest);
}
lowestNumber(ages);
// Otra opción
function lowestNumber1(array) {
    let lowest = array[0];
    array.forEach(element => {
        if (element < lowest) {
            lowest = element;
        }
    });
    console.log("Excercise 3 - Otra opción:", lowest);
}
lowestNumber1(ages);
// Otra opción x2
function lowestNumber2(array) {
    let lowest = array[0];
    let i = 0;
    while (i<array.length) {
        if (array[i] < lowest) {
            lowest = array[i];
        }
        i++;
    }
    console.log("Excercise 3 - Otra opción x2:", lowest);
}
lowestNumber2(ages);
// Otra opción x3
function lowestNumber3 (array) {
    console.log("Excercise 3 - Otra opción x3:", Math.min(...array));
}
lowestNumber3(ages);
/* Exercise 4: Write a function which receives an array as a parameter and prints the biggest number in the array to the console.
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the biggest number in the array printed in the console.  If not, investigate and fix. */
function biggestNumber(array) {
    let biggest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i]>biggest) {
            biggest = array[i];
        }
    }
    console.log("Excercise 4:", biggest);
}
biggestNumber(ages);
// Otra opción
function biggestNumber1(array) {
    let biggest = array[0];
    array.forEach(element => {
        if (element > biggest) {
            biggest = element;
        }
    });
    console.log("Excercise 4 - Otra opción:", biggest);
}
biggestNumber1(ages);
// Otra opción x2
function biggestNumber2(array) {
    let biggest = array[0];
    let i = 0;
    while (i<array.length) {
        if (array[i] > biggest) {
            biggest = array[i];
        }
        i++;
    }
    console.log("Excercise 4 - Otra opción x2:", biggest);
}
biggestNumber2(ages);
// Otra opción x3
function biggestNumber3 (array) {
    console.log("Excercise 4 - Otra opción x3:", Math.max(...array));
}
biggestNumber3(ages);
/* Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.
For example, given the following array and index, the function will print '6'.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
Save the changes to your JavaScript file and check your browser console.  You should see the number at the correct index printed in the console.  If not, investigate and fix. */
function elementAtGivenPosition(array, index) {
    console.log("Excercise 5:", array[index]);
}
elementAtGivenPosition(ages, 0);
// Otra opción mejorada
function elementAtGivenPosition1(array, index) {
    if (index<array.length) {
        console.log("Excercise 5:", array[index]);
    } else {
        console.log("Excercise 5 - Otra opción:", "El segundo parametro debe ser menor que " + array.length);
    }
}
elementAtGivenPosition1(ages, 8);
/* Exercise 6: Write a function which receives an array and only prints the values that repeat. 
For example, given the following array and index, the function will print '6,23,33,100'.
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see an array of the repeated numbers printed in the console.  If not, investigate and fix. */
function repeated(array) {
    let repeatedArrayElements = [];
    array.forEach(elem => {
        if (array.indexOf(elem) !== array.lastIndexOf(elem) && repeatedArrayElements.indexOf(elem) == -1) {
            repeatedArrayElements.push(elem);
        }
    });
    console.log("Excercise 6:", repeatedArrayElements.join(", "));
}
repeated(ages);
// Otra opción
function repeated1(array) {
    let repeatedArrayElements = [];
    let arraySort = array.sort();
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i+1]) {
            repeatedArrayElements.push(array[i]);
        }
    }
    console.log("Excercise 6 - Otra opción:", repeatedArrayElements.join(", "));
}
repeated1(ages);
/* Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string.
myColor = ["Red", "Green", "White", "Black"];
Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:
"Red", "Green", "White", "Black"
If not, investigate and fix.  */
let myColor = ["Red", "Green", "White", "Black"];
function arrayJoin(array) {
    return array.join(", ");
}
console.log("Excercise 7:", arrayJoin(myColor));
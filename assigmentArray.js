console.log("----------------------");
console.log("-- حل التكليفات --");
console.log("----------------------");


console.log("-- التكليف 01 --");
console.log("----------------------");

let Friends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(Friends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
let lastIndex = Friends.pop();
console.log(Friends); // ["Ahmed", "Elham", "Osama"];

console.log("----------------------");
console.log("-- التكليف 02 --");
console.log("----------------------");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

let shift = friends.shift();
let pop = friends.pop();

console.log(friends); // ["Eman", "Osama"]

console.log("----------------------");
console.log("-- التكليف 03 --");
console.log("----------------------");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("----------------------");
console.log("-- التكليف 04 --");
console.log("----------------------");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[0] = "Zero".toUpperCase()); // ZERO

console.log("----------------------");
console.log("-- التكليف 05 --");
console.log("----------------------");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle) === true) {
    console.log("Found");
} else {
    console.log("Not Found");
}

switch (haystack.includes(needle) === true) {
    case true:
            console.log("Found");
        break;

    default:
            console.log("Not Found");
        break;
}

if (haystack.indexOf(needle) === 1) {
    console.log("Found");
} else {
    console.log("Not Found");
}

if (haystack.lastIndexOf(needle) === 1) {
    console.log("Found");
} else {
    console.log("Not Found");
}

console.log("----------------------");
console.log("-- التكليف 06 --");
console.log("----------------------");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1, arr2).sort();
console.log(allArrs);

allArrs = allArrs.slice(4).join("").toLowerCase();
console.log(allArrs); // fxy

/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();
console.log(my); 
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

my.shift();
my.pop();

console.log(my.slice(0)); // ["Elham", "Mazero"]

my = ["Elzero"];
console.log(`"${my}"`); // "Elzero"

console.log(`"${my[0][4]}${my[0][5].toUpperCase()}"`); // "rO"
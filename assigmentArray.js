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

console.log(words[0]="Zero".toUpperCase()); // ZERO
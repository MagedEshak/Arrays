console.log("1- Array Big Introduction");
console.log("----------------------");

let myFriends = ["Maged", "Abanob", "Youseef", ["Shery", "Sara"]];
console.log(myFriends);


console.log(myFriends[0]);

myFriends[3][0] = "Mama";
console.log(myFriends[3]);

myFriends[3] = ["Mama", "Me"];
console.log(myFriends[3]);
console.log(myFriends); // ["Maged", "Abanob", "Youseef", ["Mama", "Me"]];
console.log(Array.isArray(myFriends));

console.log("----------------------");
console.log("2- Using Length With Array");
console.log("----------------------");

let myFriend = ["Maged", "Abanob", "Youseef", ["Shery", "Sara"]];
console.log(myFriend);

console.log(myFriend.length);
console.log(myFriend.length-1);

myFriend[myFriend.length - 1] = ["Ahmed", "Mohammed", "Ebram"];
console.log(myFriend);

console.log("----------------------");
console.log("3- Add And Remove From Array");
console.log("----------------------");

let myFriendse = ["Maged", "Abanob", "Youseef", ["Shery", "Sara"]];
console.log(myFriendse);

myFriendse.unshift("Mina"); //   - unshift("", "") Add Element To The First

console.log(myFriendse);

myFriendse.push("Nasser"); //   - push("", "") Add Element To The End
console.log(myFriendse);

let first = myFriendse.shift(); //   - shift() Remove First Element From Array
console.log(myFriendse);
console.log(`First Name Is ${first}`);

let last =myFriendse.pop(); //   - pop() Remove Last Element From Array
console.log(myFriendse);
console.log(`Last Name Is ${last}`);

console.log("----------------------");
console.log("4- Add And Remove From Array");
console.log("----------------------");

let myArr = ["Maged", "Abanob", "Youseef", "Mama", "Shery"]
console.log(myArr); // ;
console.log(myArr.indexOf("Abanob"));
console.log(myArr.indexOf("Mama", 3));


console.log(myArr.lastIndexOf("Mama"));
console.log(myArr.lastIndexOf("Abanob", -2 ));

console.log(myArr.includes("Mama"));

if (myArr.lastIndexOf("Mama") === -1) {
    console.log("Not Found");
} else {
        console.log("Founded");
}

console.log("----------------------");
console.log("5- Sorting Array");
console.log("----------------------");

let sortingArray = ["Maged", "Abanob", 5, "Youseef", 1000, "Mama", -30, "Shery", "200"];

console.log(sortingArray);
console.log(sortingArray.sort()); // يتعامل ابجديا ومع الارقام بيتعامل من 1:9 اللي بيبدأ بيه الرقم من الشمال
console.log(sortingArray.reverse()); // بيعكس 
console.log(sortingArray.sort().reverse()); 

console.log("----------------------");
console.log("6- Slicing Array");
console.log("----------------------");

let slicingArray = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(slicingArray);

console.log(slicingArray.slice())
console.log(slicingArray.slice(2, 5));
console.log(slicingArray.slice(-2, 4));
console.log(slicingArray.slice(2, -2));
console.log(slicingArray.slice(-3, -2));
console.log(slicingArray);

slicingArray.splice(0, 2, "Maged", "Mina");
console.log(slicingArray);

console.log("----------------------");
console.log("7- Joining Arrays");
console.log("----------------------");

let myFriendsArrays = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriendsArrays = ["Mohamed", "Sara", "Mina"];
let shcoolFriendsArrays = ["Maged", "Shery"];

let allFriends = myFriendsArrays.concat(myNewFriendsArrays, shcoolFriendsArrays,"Hesham", [2,5]);
console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(" | "));
console.log(allFriends.join(" | ").toUpperCase());
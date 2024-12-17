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


// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// //   debugger;
// }// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts (gifts) {
//     for (let i = 0; i<gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts
// }
// wrapGifts(gifts);

function writeCards(arr, e) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(`Thank you, ${arr[i]}, for the wonderful ${e} gift!`)
    }
    // debugger;
return newArray;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
// console.log(newArray);

function countDown(integer) {
    let i = integer
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
countDown(10);
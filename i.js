// ! Задание 1
// const getResult = (arr, callbeck) => {
//   let sum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     sum = callbeck(arr[i], sum);
//   }
//   return sum;
// };
// function getSum(a, b) {
//   return a + b;
// }
// function getMult(x, y) {
//   return x * y;
// }

// console.log(getResult([3, 4, 5, 1], getMult));

// ! Задание 2
// const users = [
//   { name: "Jon", age: 22 },
//   { name: "Richard", age: 18 },
//   { name: "Anton", age: 32 },
//   { name: "Lida", age: 23 },
//   { name: "Bob", age: 44 },
// ];

// function sort(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = i; k < arr.length; k++) {
//       if (callback(arr[i], arr[k]) > 0) {
//         let temp = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function getAge(a, b) {
//   if (a.age > b.age) {
//     return 1;
//   }
//   if (a.age < b.age) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// console.log(sort(users, getAge));

// ! Задание 3
// const each = (arr, callback) => {
//   let prod = 0;
//   prod = callback(arr);
//   return prod;
// };

// const reverseArr = (arr) => {
//   return arr.reverse();
// };

// const toNumberArr = (arr) => {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//       continue;
//     } else {
//       temp.push(Number(arr[i]));
//     }
//   }
//   return temp;
// };

// let newArr = [1, "4", 9, "two"];

// console.log(each(newArr, toNumberArr));

// const getAllDate = (callback) => {
//   let func = setTimeout(callback, 30000);
//   let message = "30 секунд истекло";
//   setTimeout(message, func * 1000);
// };

// ! Задание 4
// let delay = 3000;
// let getTime = false;
// let idTimeout = setTimeout(function getDateFunc() {
//   if (!getTime) {
//     let time = new Date();
//     console.log(time);
//     setTimeout(getDateFunc, delay);
//   }
// }, delay);
// setTimeout(() => {
//   getTime = true;
//   clearTimeout(idTimeout);
//   console.log("30 секунд прошло");
// }, delay * 10);

// let delay = 3000;
// const getDate = () => {
//   let idInterval = setInterval(() => {
//     let time = new Date();
//     console.log(time);
//   }, delay);
//   setTimeout(() => {
//     clearInterval(idInterval);
//     console.log("30 секунд прошло");
//   }, delay * 10);
// };
// getDate();

// ! Задание 5

// function calling() {
//   console.log("Звоню!");
// }

// function beeps(callback) {
//   let responce = setTimeout(() => {
//     console.log("Идут гудки...");
//     callback(responce);
//   }, 1000);
// }

// function talk() {
//   console.log("Разговор");
// }

// calling();
// beeps(talk);

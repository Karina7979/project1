"use strict";

// let userName = prompt ('Введите ваше имя');
// alert(userName);

// let num = 3;
// num += 10;
// console.log(num);

// let userName = "Dick";
// let age = 34;
// alert(`my name is ${userName} and my age is ${age}`);

// let Tc = 40;
// let Tf = (9 / 5) * Tc + 32;
// alert(Tf);


// let Name = "Василии";
// let admin = Name;
// alert(admin);

// let answer = prompt("mbjboot");
// if (answer == "gg") {
//     alert("bgfgbf");
// } else {
//     alert("bgb");
// }

// function sayHello() {
//     console.log("did");
// }

// sayHello();

// function getDay() {
//     let dayNum = new Date().getDay();
//     // let day = "";
//     switch (dayNum) {
//         case 1:
//             return "Monday";
//             break;
//         case 2:
//             return "Tuesday";
//             break;
//         case 3:
//             return "Wednesday";
//             break;
//         case 4:
//             return "Thursday";
//             break;
//         case 5:
//             return "Friday";
//             break;
//         case 6:
//             return "Saturday";
//             break;
//         case 7:
//             return "Sunday";
//             break;

//     }


// /**
//  * функция складывает числа
//  * @param {number} a число1
//  * @param {number} b число2 
//  */


// function sum(a, b) {
//     return a + b;
// }

// let result = sum(2, 5);
// console.log(result);


// // калбэк функция
// let clickHandler = function() {
//     alert("Hello");
// }

// let button = document.querySelector('button');
// button.addEventListener('click', clickHandler);

// //несколько параметров
// function SayHello (name, ...other) {
//     alert("Hello" + name);
//     alert(other);
// }

// SayHello('Dick', 'Stan', 'Bran');


// //стрелочная функция
// let sayHello = () => console.log("hello");

// sayHello();


// let oneParam = num => console.log(num);

// oneParam(223);

// es 5
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Product.prototype.make25PercentDiscount = function (discount) {
//     console.log(this.price - (this.price / 100 * discount));
// };

// let product1 = new Product("товар", 2400);

// product1.make25PercentDiscount(25);

// es6
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     make25PercentDiscount (discount) {
//         console.log(this.price - (this.price / 100 * discount));
//     }
// }

// let product1 = new Product("товар", 2400);

// product1.make25PercentDiscount(25);



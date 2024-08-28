"use strict";
//LOGICAL OPERATORS
//AND OPERATOR(&&):when the both two condition is true,the answer is true
let a = 5;
let answer = a >= 5 && a == 5;
console.log(answer); //true
let answer1 = a >= 5 && a == 6;
console.log(answer1); //false
//OR OPERATOR(||):when the both two condition is true,the answer is true,when the first condition is true and second is false the condition is true,when the both two condition is false,the answer is false,
let b = 6;
let answer2 = b >= 5 || b == 6;
console.log(answer2); //true
let answer3 = a >= 5 && a == 6;
console.log(answer3); //false
let answer4 = a >= 5 && a == 5;
console.log(answer4); //true
//NOT OPERATOR(!):it give opposite answer,when the condition is true,it give false,when the condition is false,it give true
let c = 7;
let answer5 = !(c > 6);
console.log(answer5); //false
let answer6 = !(c < 6);
console.log(answer6); //true

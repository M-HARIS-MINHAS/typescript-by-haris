//Const:variable cannot be re-declared or updated.A block scope variable.
const name1 ="haris";
name1 ="hashir"//give cursuor to name 1,name 1 cannot be updated

const name1 ="hasham";//give cursuor to name 1,name 1 cannot be re-declared



//Let:variable cannot be re-declared but can be updated.A block scope variable
let name2 ="usman";
name2 ="umar"//variable can be updated in let

let name2 ="usman";//give cursuor to name 2,variable cannot be re-declared


if(true){
    let a="ali";
    console.log(a)
}
else{
   console.log("not working") //this block scope is not work
}
console.log(a)//it can not run because let is block-scope variable


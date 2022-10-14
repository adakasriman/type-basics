"use strict";
//string
let stringVariable = "sriman";
stringVariable = "manu";
// number
let numberVariable = 1234;
numberVariable = 76543;
// boolean 
let booleanvariable = true;
booleanvariable = false;
// any --> It is completly opposite of type checking and it can acces any data type
let anyVariable = "babai";
anyVariable = 1234;
anyVariable = {};
anyVariable = [];
anyVariable = true;
// object  
// --> If you created a object with key value pair 
let objectvariable = {
    name: "manu",
    age: 23,
};
objectvariable = {
    name: "sriman",
    age: 43 //suppose if miss age in object, it gives error 
};
// --> using type we can create custom Types
let objectvariableExTwo = {
    name: "manu",
    age: 2345,
    object: { manu: "awertyu" }
};
// Arrays
let arrayVariable = ["manu", "sdfghjk"]; // array acces only string
let arrayNumberVariable = [23456, 123456789]; // array acces only number
let arrayAccesAnyVariable = [23456, '123456789', {}]; // access any datatype
// --> array of arrays
let arrayOfArrayVariable = [[], []];
// array of objects 
let arrayOfObjects = [
    {
        name: "manu",
        age: 12345678
    },
    {
        name: "manu",
        age: 12345678,
        some: 123456
    }
];
// Truples --> it have fixed length and fixed Type
let trupleVariable = ['manu', 234567, {}];
// Union :  here pipe option is there => It means can any one data type
let unionVariable = "manu";
unionVariable = 23456;
unionVariable = {};
// Enum --> Mainly it is used for constant
// --> readnly property
var names;
(function (names) {
    names["firstname"] = "sriman";
    names["lastname"] = "adaka";
    names[names["age"] = 23] = "age";
})(names || (names = {}));
// Type Assertion --> changing datatype
let typeAssertion = "sdfghjk"; // dont have any datatype 
let typeAssertionNumber = typeAssertion;
typeAssertion = 234567890;
let userLastname = "23456789";
let typeAsVariable = typeAssertion;
// functions 
function sum(a, b) {
    return a + b;
}
sum(1234, 23);
// --> If we are not returning any value from functions,that we can use void type
function sub(a, b, c) {
    console.log(a - b);
}
sub(234, 432, 2345);
let bike = {
    name: "jawa",
    bikeWeight: 234,
    bikePrice: 257
};

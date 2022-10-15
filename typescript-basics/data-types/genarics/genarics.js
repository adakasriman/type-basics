"use strict";
// Genarics 
// --> Generics allow creating 'type variables' which can be used to create classes,
// functions & type aliases that don't need to explicitly define the types that they use.
function genericsExample(parameter) {
    return parameter; // returning value
}
let storingFunctionVariable = genericsExample(12345); //calling function and passing number type to function.
console.log(storingFunctionVariable); //printing returned value
// example for array
function getArray(arr) {
    return new Array().concat(arr);
}
console.log(getArray([1, 2, 3, 4, 5])); //calling function and setting number type for array value 

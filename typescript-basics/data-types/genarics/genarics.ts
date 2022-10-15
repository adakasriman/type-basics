// Genarics 

// --> Generics allow creating 'type variables' which can be used to create classes,
// functions & type aliases that don't need to explicitly define the types that they use.

function genericsExample<type>(parameter: type): type { //type of type come from function calling 

    return parameter; // returning value
}


let storingFunctionVariable = genericsExample<number>(12345); //calling function and passing number type to function.

console.log(storingFunctionVariable); //printing returned value

// example for array
function getArray<type>(arr: type): type {
    return arr;
}

console.log(getArray<number[]>([1, 2, 3, 4, 5])); //calling function and setting number type for array value 










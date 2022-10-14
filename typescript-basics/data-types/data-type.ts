//string

let stringVariable: string = "sriman";

stringVariable = "manu";

// number

let numberVariable: number = 1234;

numberVariable = 76543;

// boolean 

let booleanvariable: boolean = true;

booleanvariable = false;

// any --> It is completly opposite of type checking and it can acces any data type

let anyVariable: any = "babai";

anyVariable = 1234;

anyVariable = {};

anyVariable = [];

anyVariable = true;

// object  --> If you created a object with key value pair 

let objectvariable: { name: string, age: number } = {
    name: "manu",
    age: 23,
}

objectvariable = {
    name: "sriman",
    age: 43  //suppose if miss age in object, it gives error 
};

// another way of giving type to object

type person = {
    name: string,
    age: number
    object: {}
}

let objectvariableExTwo: person = {
    name: "manu",
    age: 2345,
    object: { manu: "awertyu" }
}

// Arrays

let arrayVariable: string[] = ["manu", "sdfghjk"]; // array acces only string

let arrayNumberVariable: number[] = [23456, 123456789]; // array acces only number

let arrayAccesAnyVariable: any = [23456, '123456789', {}]; // access any datatype

// ==> array of arrays

let arrayOfArrayVariable: [][] | object = [[], []]

// array of objects 

let arrayOfObjects: {}[] = [
    {
        name: "manu",
        age: 12345678
    },
    {
        name: "manu",
        age: 12345678,
        some: 123456
    }
]


// Truples --> it have fixed length and fixed Type

let trupleVariable: [string, number, object] = ['manu', 234567, {}];

// Union :  here pipe option is there => It means can any one data type

let unionVariable: number | string | object = "manu";

unionVariable = 23456;

unionVariable = {};

// Enum --> Mainly it is used for constant
// --> readnly property
enum names {
    firstname = "sriman",
    lastname = "adaka",
    age = 23
}


// Type Assertion --> changing datatype

let typeAssertion: unknown = "sdfghjk"; // dont have any datatype 

let typeAssertionNumber: number = <number>typeAssertion;

typeAssertion = 234567890;

let userLastname: string = <string>"23456789";

let typeAsVariable: string = typeAssertion as string;















"use strict";
// class in typeScript
class parentClass {
    // constructor(public name: string,public age: number,public publicVarable: string,private privatevariable: string,protected protectedVariable: number) 
    // If we use above line, no need to declare variable in top
    constructor(name, age, publicVarable, privatevariable, protectedVariable) {
        this.name = name;
        this.age = age;
        this.publicVarable = publicVarable;
        this.privatevariable = privatevariable;
        this.protectedVariable = protectedVariable;
    }
    parentMethod() {
        console.log("my name is " + this.name + " " + "my age " + this.age + " " + " publicVarable " + this.publicVarable + " " + " protectedVariable " + this.protectedVariable);
    }
}
class chidClass extends parentClass {
    constructor(name, age, publicVarable, privatevariable, protectedVariable) {
        super(name, age, publicVarable, privatevariable, protectedVariable);
        this.name = "sriman"; // can update parent class variables
    }
    childMethod() {
        console.log("my name is " + this.name + " " + "my age " + this.age + " " + " publicVarable " + this.publicVarable + " " + " protectedVariable " + this.protectedVariable);
    }
}
let storingClassRefrence = new chidClass("manu", 2345, "public", "private", 234567);
let storingTwoClassRefrence = new chidClass("manu", 2345, "public", "private", 234567);
storingClassRefrence.childMethod();
storingTwoClassRefrence.parentMethod(); //this defind with public 

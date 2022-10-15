// class in typeScript



// --> access modifiers ==> private ,protected and public

// private varibale --> It can access only with in current class

// protected variable --> It can access only with in current class and extend of parent class 

// public variable --> It can access inside , extend class and outside of class

// Using interface in class

// Encapsulations -->  a class's variables are hidden from other classes and can only be accessed by the methods of the class in which they are found.

// inheritance --> It means, we can use exited data(parent variable and methods) and also can create more variables  and methods in child class 

interface parentClassVariable {
    name: string,
    age: number
    lastName?: string
}

class parentClass implements parentClassVariable {
    name: string
    age: number
    public publicVarable: string // outSide can access
    private privatevariable: string // only access in current class
    protected protectedVariable: number // can access both parent class and child class
    // constructor(public name: string,public age: number,public publicVarable: string,private privatevariable: string,protected protectedVariable: number) 
    // If we use above line, no need to declare variable in top
    constructor(name: string, age: number, publicVarable: string, privatevariable: string, protectedVariable: number) {
        this.name = name;
        this.age = age;
        this.publicVarable = publicVarable
        this.privatevariable = privatevariable
        this.protectedVariable = protectedVariable
    }

    public parentMethod() {
        console.log("my name is " + this.name + " " + "my age " + this.age + " " + " publicVarable " + this.publicVarable + " " + " protectedVariable " + this.protectedVariable);
    }
}

class chidClass extends parentClass {
    constructor(name: string, age: number, publicVarable: string, privatevariable: string, protectedVariable: number) {
        super(name, age, publicVarable, privatevariable, protectedVariable);
        this.name = "sriman" // can update parent class variables
    }
    childMethod() {
        console.log("my name is " + this.name + " " + "my age " + this.age + " " + " publicVarable " + this.publicVarable + " " + " protectedVariable " + this.protectedVariable);
    }
}

let storingClassRefrence = new chidClass("manu", 2345, "public", "private", 234567);

let storingTwoClassRefrence = new chidClass("manu", 2345, "public", "private", 234567);

storingClassRefrence.childMethod();
storingTwoClassRefrence.parentMethod(); //this defind with public 

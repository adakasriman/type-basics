// Class--es6

// --> Classes are a template for creating objects. 

class parent {
    constructor() {  // every class have a default constructor for creacting variables with this key word
        this.parentname = "manu",  // 'this' is refernce of current object or class
            this.age = 23
    }
    parentFunction() {
        console.log(this.parentname);
        console.log(manu);
    }
}



class chidClass extends parent { // extension means continution of parent class object.
    constructor() {
        super();  // If we are not using super method in child constructor, we can't access parent variables and functions.
        this.childName = "sriman";
        this.parentname = "adaka"; // In child class we can update of parent variable values.
    }
    childFunction() {
        console.log(this.childName);
    }

}

// --> If we want acces a variable or functions in clsss, must need to take refernce from class

let storingClassRefrence = new chidClass(); //storingClassRefrence is refernce variable of class

storingClassRefrence.parentFunction(); 
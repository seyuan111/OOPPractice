// *Variables*
// Create a variable and console log the value

//let NBA = "Warriors";

//console.log(NBA);

// Create a variable, add 10 to it, and alert the value

let num = 50;

num = num + 10;

console.log(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractNum(num1,num2,num3,num4){
    let result = num1-num2-num3-num4;
    console.log(result);
}

subtractNum(70,20,20,10)

// Create a function that divides one number by another and returns the remainder

function divide(n1,n2){
    let result = n1/n2
    console.log(result);
}

divide(6,2);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

//function check2Nums(num1,num2){
//    let num = num1+num2;

//    if(num > 50){
//        alert("We are going to a Lunay concert")
//    }else{
//        alert("Lunay will not be performing at our place")
//    }
//}

//check2Nums(70,10);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

//function check3nums(num1,num2,num3){
//    let totalNum = num1 * num2 * num3;

//    if(totalNum % 3 === 0){
//        alert("zebra");
//    }else{
//        alert("Bay of Pigs")
//    }
//}

//check3nums(5,2,3);

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} wants to speak to you`)
    }
}

class Dog extends Animal {
    constructor(name,breed){
        super(name)
        this.breed = breed;
    }
}

class Cat extends Animal {
    constructor(name,breed){
        super(name)
        this.breed = breed;
    }
}

class Fish extends Animal {
    constructor(name,breed){
        super(name)
        this.breed = breed;
    }
}

let dog1 = new Dog("Anatalia","Beagle");
let cat1 = new Cat("Natalie", "Savannah Cat");
let fish1 = new Fish("Shelby", "Salmon fish");

class Rapper {
    constructor(name){
        this.name = name;
    }
    rap() {
        console.log(`${this.name} is my rapper`)
    }
}

class hiphop extends Rapper{
    constructor(name){
        super(name)
    }
}

let Rapper1 = new Rapper("Lil durk")
let Rapper2 = new Rapper("Megan Thee Stallion")


class ESPN {
    constructor(name){
        this.name = name
    }
    Takes() {
        console.log(`${this.name} is the real MVP`)
    }
}

class NBA extends ESPN {
    constructor(name){
        super(name)
    }
}

let NBAPlayer = new ESPN("Ja Morant")
let AnotherNBAPlayer = new ESPN("Giannis")
let NBAPlayer2 = new ESPN("Demar Derozan")
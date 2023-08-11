/*
*Author: Md Sholayman
*Date : 11 August , 2023.
*Description: An assignment of JavaScript(ES6) for ostad platform.
 */

//Topic-1:javascript For in loop

function printObjectProperties(obj){

if(Object.keys(obj).length===0){
    console.log('Object is empty');
    return
}

  for(property in obj){
    console.log(`${property}:${obj[property]}`);

}

}

const person={
    name: "Leo Messi",
    age:36,
    prof: "Footballer"
}
const pp={

}

printObjectProperties(person);


//Topic-2:javascript function returns

function findMaxNumber (params) {
   if(params.length === 0){
    return null
   }
   const maxNum = Math.max(...params)
   return maxNum
}

const numbers1 = [10, 20, 5, 30, 25];
const number =[]

console.log(findMaxNumber(numbers1));


//topic-3: javascript Spread Operator


function mergeArrays (arr1,arr2) {
    let newArr = [...arr1,...arr2]
    return newArr ;
}

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1,arr2));



//topic-4: javascript arrow function

const calculateSquare = num =>{
    const result = num * num;
    return result ;
}


console.log(calculateSquare(1)); // Output: 1
console.log(calculateSquare(2)); // Output: 4
console.log(calculateSquare(3)); // Output: 9
console.log(calculateSquare(4)); // Output: 16
console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(6)); // Output: 36
console.log(calculateSquare(7)); // Output: 49
console.log(calculateSquare(8)); // Output: 64
console.log(calculateSquare(9)); // Output: 81
console.log(calculateSquare(10)); // Output: 100



//Topic-5:javascript es6 map

function doubleNumbers (params) {
   const res = params.map(num => num * 2) ;
   return res ;
}
const numbers = [1, 2, 3, 4, 5];

console.log(doubleNumbers(numbers));



//Topic-6: MathUtility

class MathUtility{
    static multiply(num1,num2){
         const res = num1 * num2
         return res;
    }
}

console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16
console.log(MathUtility.multiply(10, 8)); // Output: 80


//Topic-7: javascript es6 class inheritance

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} makes a sound: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }

    fetch() {
        console.log(`${this.name} is fetching the ball!`);
    }
}


const animal = new Animal("Lion", "Roar");


animal.makeSound(); // Output: "Roar"


 


const dog = new Dog("Buddy", "Woof");


dog.makeSound();


dog.fetch(); 


//Topic-8: javascript es6 super keyword


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old, and I'm majoring in ${this.major}.`);
    }
}

// Creating instances and using methods
const person1 = new Person("John", 30);
person1.introduce();  

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); 



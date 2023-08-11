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



import { type } from "os";
import { stringify } from "querystring";

const palindrome = require('is-palindrome')

function sumOfEven(arr: number[]): number {
    const newArr = arr.filter(num => num % 2 === 0);
    const sum = newArr.reduce((total, num) => total + num, 0)
    return sum
}
// console.log(sumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2
interface rectangel { height: number, width: number }
const rec: rectangel = { height: 5, width: 5 }

function rectangle(rectangel: rectangel): number {
    return rectangel.height * rectangel.width
}

// console.log(rectangle(rec));

// 2
function palindromeStr(str: string): boolean {
    return palindrome(str)
}
// console.log(palindromeStr('1234321'));

// 3
function uppLowStr(arrStr: string[]): string[] {
    const newArr = [];
    for (let j = 0; j < arrStr.length; j++) {
        let str = ''
        for (let i = 0; i < arrStr[j].length; i++) {
            let letter;
            i === 0 ? letter = arrStr[j][i].toUpperCase() : letter = arrStr[j][i].toLowerCase();

            str += letter
            console.log(letter);
        }
        newArr.push(str)
        console.log(newArr[j]);
    }
    return newArr
}
const arrStr: string[] = ["apPle", "baNAna", "Cherry", "dTte"]
// console.log(uppLowStr(arrStr));


// 4
function setArr(arr:number[]):number[]{
    const newArr:number[] = []
    for (const num of arr) {
        if(!newArr.includes(num))
        newArr.push(num)
    }
    return newArr
}
// console.log(setArr([1,3,5,7,7,9,3,5,7,2]));

// 5
type input = {
    firstName:string,
    lastName:string
}
type output = {
    firstInitial:string,
    lastInitial:string
}
function initial(name:input):output{
    return {
        firstInitial:name.firstName[0],
        lastInitial:name.lastName[0]
    }
}
// console.log(initial({ firstName: "John", lastName: "Doe" }));

// 6
type person={
    name:string,
    age:number
}
function avrige(people:person[]):number{
    let sum = 0;
    for (const pers of people) {
        sum+=pers.age
    }
    return sum/people.length
}

const people:person[]=[
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
    ]

console.log(avrige(people));











import { type } from "os";

console.log('ereuity');
// 1
function maxnum(num1: number, num2: number): number {
    return Math.max(num1, num2)
}

// 2
function printmaxnum(num1: number, num2: number): void {
    console.log(Math.max(num1, num2));
}

// 3
function even(num: number): string {
    return num % 2 === 0 ? 'num is even' : 'num is odd';
}

// 4
function length(str: string): number {
    return str.length
}
// console.log(length('wert'));

// 5
function untilNum(num: number): number[] {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}
// console.log(untilNum(5));

// 6
function maxOfArr(arr: number[]): number {
    return Math.max(...arr)
}
// console.log(maxOfArr([2,4,7,11]));

// 7
type person = {
    name: string,
    age: number,
    isStudent: boolean
}

// 8
function printPerson(person: person): void {
    console.log(
        person.name,
        person.age.toString(),
        person.isStudent.toString()
    );
}

const examplePerson: person = {
    name: "John",
    age: 25,
    isStudent: true,
};

// printPerson(examplePerson);

// 9
function isMinor(person: person): boolean {
    return person.age > 18 ? true : false
}

console.log(isMinor(examplePerson));

// 10
interface Book {
    Title: string,
    Author: string,
    Year: number
}

// 11
interface favoriteBook extends person {
    favoriteBook: Book
}

type Reader = person & favoriteBook;

// 12
function oldRid(readers: Reader[]): Reader {
    let old = 0;
    let index = 0
    for (let i = 0; i < readers.length; i++) {
        if (readers[i].age > old) {
            old = readers[i].age;
            index = i;
        }
    }
    return readers[index]
}


// Example Reader objects
const readers: Reader[] = [{
    name: "Alice",
    age: 30,
    isStudent: false,
    favoriteBook: {
        Title: "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        Year: 1925
    }
}

, {
    name: "Bob",
    age: 22,
    isStudent: true,
    favoriteBook: {
        Title: "1984",
        Author: "George Orwell",
        Year: 1949
    }
}

,{
    name: "Carol",
    age: 17,
    isStudent: true,
    favoriteBook: {
        Title: "To Kill a Mockingbird",
        Author: "Harper Lee",
        Year: 1960
    }
}]
// console.log(oldRid(readers));


// 13
function oldbook(readers: Reader[]): Reader {
    let old = readers[0].favoriteBook.Year;
    let index = 0
    for (let i = 0; i < readers.length; i++) {
        if (readers[i].favoriteBook.Year > old) {
            old = readers[i].age;
            index = i;
        }
    }
    return readers[index]
}
console.log(oldbook(readers));


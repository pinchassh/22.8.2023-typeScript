"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('ereuity');
// 1
function maxnum(num1, num2) {
    return Math.max(num1, num2);
}
// 2
function printmaxnum(num1, num2) {
    console.log(Math.max(num1, num2));
}
// 3
function even(num) {
    return num % 2 === 0 ? 'num is even' : 'num is odd';
}
// 4
function length(str) {
    return str.length;
}
// console.log(length('wert'));
// 5
function untilNum(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
// console.log(untilNum(5));
// 6
function maxOfArr(arr) {
    return Math.max.apply(Math, arr);
}
// 8
function printPerson(person) {
    console.log(person.name, person.age.toString(), person.isStudent.toString());
}
var examplePerson = {
    name: "John",
    age: 25,
    isStudent: true,
};
// printPerson(examplePerson);
// 9
function isMinor(person) {
    return person.age > 18 ? true : false;
}
console.log(isMinor(examplePerson));
// 12
function oldRid(readers) {
    var old = 0;
    var index = 0;
    for (var i = 0; i < readers.length; i++) {
        if (readers[i].age > old) {
            old = readers[i].age;
            index = i;
        }
    }
    return readers[index];
}
// Example Reader objects
var readers = [{
        name: "Alice",
        age: 30,
        isStudent: false,
        favoriteBook: {
            Title: "The Great Gatsby",
            Author: "F. Scott Fitzgerald",
            Year: 1925
        }
    },
    {
        name: "Bob",
        age: 22,
        isStudent: true,
        favoriteBook: {
            Title: "1984",
            Author: "George Orwell",
            Year: 1949
        }
    },
    {
        name: "Carol",
        age: 17,
        isStudent: true,
        favoriteBook: {
            Title: "To Kill a Mockingbird",
            Author: "Harper Lee",
            Year: 1960
        }
    }];
// console.log(oldRid(readers));
// 13
function oldbook(readers) {
    var old = readers[0].favoriteBook.Year;
    var index = 0;
    for (var i = 0; i < readers.length; i++) {
        if (readers[i].favoriteBook.Year > old) {
            old = readers[i].age;
            index = i;
        }
    }
    return readers[index];
}
console.log(oldbook(readers));

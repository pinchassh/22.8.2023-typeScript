"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var palindrome = require('is-palindrome');
function sumOfEven(arr) {
    var newArr = arr.filter(function (num) { return num % 2 === 0; });
    var sum = newArr.reduce(function (total, num) { return total + num; }, 0);
    return sum;
}
var rec = { height: 5, width: 5 };
function rectangle(rectangel) {
    return rectangel.height * rectangel.width;
}
// console.log(rectangle(rec));
// 2
function palindromeStr(str) {
    return palindrome(str);
}
// console.log(palindromeStr('1234321'));
// 3
function uppLowStr(arrStr) {
    var newArr = [];
    for (var j = 0; j < arrStr.length; j++) {
        var str = '';
        for (var i = 0; i < arrStr[j].length; i++) {
            var letter = void 0;
            i === 0 ? letter = arrStr[j][i].toUpperCase() : letter = arrStr[j][i].toLowerCase();
            str += letter;
            console.log(letter);
        }
        newArr.push(str);
        console.log(newArr[j]);
    }
    return newArr;
}
var arrStr = ["apPle", "baNAna", "Cherry", "dTte"];
// console.log(uppLowStr(arrStr));
// 4
function setArr(arr) {
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (!newArr.includes(num))
            newArr.push(num);
    }
    return newArr;
}
function initial(name) {
    return {
        firstInitial: name.firstName[0],
        lastInitial: name.lastName[0]
    };
}
function avrige(people) {
    var sum = 0;
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var pers = people_1[_i];
        sum += pers.age;
    }
    return sum / people.length;
}
var people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
];
console.log(avrige(people));

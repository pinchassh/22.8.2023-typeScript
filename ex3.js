"use strict";
// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ['asd',3]
function argumants(arg1, arg2) {
    return [arg1, arg2];
}
var object = {
    name: "John",
    age: 30,
    email: "john@example.com",
};
// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
function objKye(obj, kye) {
    return obj[kye];
}
// console.log(objKye(object,'name'));
//3
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך
// עליכם לקרוא על ולהשתמש ב: Record
function record(arr, obj) {
    return arr.map(function (item) { return (__assign(__assign({}, item), obj)); });
}
// console.log(record([object,object],{'a':7}));
// 4
// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit
function unKye(obj, kyeName) {
    var _a = obj, _b = kyeName, _ = _a[_b], newObj = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return newObj;
}
// console.log(unKye(object,'age'));
// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &
function newPild(obj, kye, val) {
    var _a;
    return __assign(__assign({}, obj), (_a = {}, _a[kye] = val, _a));
}
console.log(newPild(object, 'amit', 9));

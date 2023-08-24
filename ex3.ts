// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 

import { type } from "node:os";

// ['asd',3]
function argumants<T, K>(arg1: T, arg2: K): [T, K] {
    return [arg1, arg2]
}
// console.log(argumants(['r'],4));

type ob = {
    name: string,
    age: number,
    email: string,
};

const object:ob = {
    name: "John",
    age: 30,
    email: "john@example.com",
};
// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
function objKye<T>(obj: T, kye: keyof T): T[keyof T] {
    return obj[kye]
}
// console.log(objKye(object,'name'));

//3
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך
// עליכם לקרוא על ולהשתמש ב: Record
function record<T extends Record<string, any>>(arr: T[], obj: Record<string, any>): T[] {
    return arr.map(item => ({ ...item, ...obj }))
}
// console.log(record([object,object],{'a':7}));

// 4
// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit
function unKye<T>(obj: T, kyeName: keyof T): Omit<T, keyof T> {
    const {[kyeName]:_,...newObj}=obj;
    return newObj
}
// console.log(unKye(object,'age'));


// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &
function newPild<T extends Record<string, any>,K extends string,V>(obj: T,kye:K,val:V): T {
    return { ...obj , [kye]:val }
}
console.log(newPild(object,'amit',9));

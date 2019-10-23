"use strict";
exports.__esModule = true;
var isBegginner = true;
var total = 0;
var name = 'Bree';
var sentense = "My name is " + name + " and I " + (isBegginner == true ? "am" : "am not") + " developer";
console.log(sentense);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var personOne = ["Bree", 26];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Bree';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
else {
    console.log("no name");
}
// (myVariable as string).toUpperCase()
//idk why they say this would work, because that is a lie
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(5, 99));
console.log(add(9));

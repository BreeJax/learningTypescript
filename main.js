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
myVariable.toUpperCase();

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//while you don't have to have types, do it anyway
var multiType;
multiType = 20;
multiType = true;
//the question mark makes it so that you are not required to pass
//through the second parameter 
//the first parameter must ALWAYS be required
//that is to say, num1?: number, num2: number would not work
//function add(num1: number, num2?: number): number{
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(5, 99));
console.log(add(9));
//use interface to keep code in line
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName + "!");
    };
    return Employee;
}());
var empl1 = new Employee('Mark');
console.log(empl1.employeeName);
empl1.greet();
//this is using inheritance 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    //method
    Manager.prototype.delegateWork = function () {
        console.log("Manager Delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//

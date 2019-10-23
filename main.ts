export {}
//export forced ts to treat this as a moduel and not a script

const isBegginner: boolean = true;
const total:number = 0;
const name: string = "Bree"
const sentense: string = `My name is ${name} and I ${isBegginner == true ? "am": "am not"} developer`

console.log(sentense);
//null and undefined are 'subtypes'
const n: null = null;
const u: undefined = undefined;

const isNew: boolean = null;
const myName: string = undefined;

//list1 and list2 are the same, neither is better, all coding preference there
const list1: number[]= [1,2,3]
const list2: Array<number> = [1,2,3]

const personOne: [string, number] = ["Bree", 26];

//enum types are how you can give names to values
enum Color {Red = 5, Green, Blue};
let c: Color = Color.Red;
console.log(c + " Color");

//if you don't know what value type will be, use any
let randomValue: any = 10;
randomValue = true;
randomValue = "Bree"

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if (hasName(myVariable)){
    console.log(myVariable.name); 
} else {
    console.log("no name");
}

// (myVariable as string).toUpperCase()
//idk why they say this would work, because that is a lie

let a;
a= 10
a = true;

const b = 20;

//while you don't have to have types, do it anyway
let multiType: number | boolean;
multiType = 20;
multiType = true;

//the question mark makes it so that you are not required to pass
//through the second parameter 
//the first parameter must ALWAYS be required
//that is to say, num1?: number, num2: number would not work
//function add(num1: number, num2?: number): number{
function add(num1: number, num2: number = 10): number{
    if(num2){
        return num1 + num2;
    } else{
        return num1;
    }
}

console.log(add(5,99));
console.log(add(9));

//while this works, it is not the best way to do things, and will start to look clunky after a while
// function fullName (person:{firstName: string, lastName: string}){
//     console.log(`${person.firstName} ${person.lastName}`);   
// }

//age is not required
interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}
//use interface to keep code in line
function fullName (person: Person){
    console.log(`${person.firstName} ${person.lastName}`);   
}

const p = {
    firstName: "Bruce",
    lastName: "Wayne"
}

fullName(p)

class Employee {
    //public: this is automatically public, though you can add public before hand for readabilty sake
    //private: cannot be accessed outside of THIS class
    //protected: makes it so that things are not accessable outside of classes 
    public employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}!`);
        
    }
}
const empl1 = new Employee("Mark")
console.log(empl1.employeeName);
empl1.greet()

//this is using inheritance 
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    //method
    delegateWork(){
        console.log(`Manager Delegating tasks ${this.employeeName}`);
        
    }
}
const m1 = new Manager(`Bruce`)
m1.delegateWork()
m1.greet()
console.log(m1.employeeName);

//
